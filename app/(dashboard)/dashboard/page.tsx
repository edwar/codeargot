import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { CheckCircle, Clock, TrendingUp, ClipboardCheck } from "lucide-react";
import { MetricCard, InterviewList } from "./components";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const interviews = await db.interview.findMany({
    where: {
      userId,
    },
    select: {
      startedAt: true,
      completedAt: true,
      transcript: true
    },
  });

  const total = interviews.length;

  const completedInterviews = interviews.filter((i) => i.completedAt !== null);

  const totalDurationMs = completedInterviews.reduce((acc, i) => acc + (i.completedAt!.getTime() - i.startedAt.getTime()), 0);

  const avgDuration = completedInterviews.length ? Math.round(totalDurationMs / completedInterviews.length / 1000 / 60) : 0;

  const successRate = completedInterviews.length ? Math.round(completedInterviews.length / total * 100) : 0;

  return (  
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-3 rounded-md p-6 bg-white/10 backdrop-blur-lg text-white border border-white/20">
        <MetricCard
          icon={<CheckCircle className="text-green-400" />}
          title="Completed"
          value={completedInterviews.length}
        />
        <MetricCard
          icon={<ClipboardCheck className="text-yellow-400" />}
          title="Total"
          value={total}
        />
        <MetricCard
          icon={<Clock className="text-purple-400" />}
          title="Average time"
          value={`${avgDuration } min`}
        />
        <MetricCard
          icon={<TrendingUp className="text-blue-400" />}
          title="Success rate"
          value={`${successRate}%`}
        />
      </div>
      <div>
        <div className="mt-4 p-4 bg-blue-600/20 border border-blue-400/30 rounded-md">
          <div className="text-sm text-blue-200">
            <strong>💡 Advice: </strong> Our AI interviewer is here to help you prepare for you next interview. It provides you with a personalized and interactive experience, tailored to your need and preferences.
          </div>
        </div>
      </div>
      <InterviewList />
    </div>
  )
}
