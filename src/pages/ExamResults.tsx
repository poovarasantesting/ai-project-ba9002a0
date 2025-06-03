import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart, CheckCircle2, Clock, Medal, AlertTriangle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock data for student results
const studentData = {
  name: "Alex Johnson",
  id: "STU-2023-45678",
  grade: "12th Grade",
  profileImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1760&auto=format&fit=crop",
};

const examResults = [
  {
    subject: "Mathematics",
    score: 92,
    maxScore: 100,
    grade: "A",
    status: "pass",
    teacher: "Dr. Smith",
    feedback: "Excellent work on calculus problems. Could improve on geometry section.",
    date: "2025-03-15",
  },
  {
    subject: "Physics",
    score: 87,
    maxScore: 100,
    grade: "B+",
    status: "pass",
    teacher: "Prof. Richards",
    feedback: "Good understanding of mechanics. Review electromagnetism concepts.",
    date: "2025-03-18",
  },
  {
    subject: "Chemistry",
    score: 78,
    maxScore: 100,
    grade: "C+",
    status: "pass",
    teacher: "Ms. Johnson",
    feedback: "Organic chemistry needs improvement. Lab work was excellent.",
    date: "2025-03-22",
  },
  {
    subject: "Biology",
    score: 95,
    maxScore: 100,
    grade: "A+",
    status: "pass",
    teacher: "Dr. Williams",
    feedback: "Outstanding work across all topics. Exceptional understanding of genetics.",
    date: "2025-03-25",
  },
  {
    subject: "English Literature",
    score: 88,
    maxScore: 100,
    grade: "B+",
    status: "pass",
    teacher: "Mr. Thompson",
    feedback: "Strong analytical skills. Work on developing more complex arguments.",
    date: "2025-03-29",
  },
];

const overallStats = {
  average: 88,
  highest: "Biology (95%)",
  lowest: "Chemistry (78%)",
  passRate: "100%",
  examsTaken: 5,
  examsRemaining: 2,
};

export default function ExamResults() {
  const [selectedExam, setSelectedExam] = useState(examResults[0]);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
        <Card className="w-full md:w-1/3">
          <CardHeader className="pb-2">
            <CardTitle>Student Profile</CardTitle>
            <CardDescription>Exam period: Spring 2025</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={studentData.profileImage} alt={studentData.name} />
                <AvatarFallback>{studentData.name.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-bold">{studentData.name}</h3>
                <p className="text-sm text-muted-foreground">ID: {studentData.id}</p>
                <p className="text-sm text-muted-foreground">{studentData.grade}</p>
              </div>
            </div>
            
            <div className="mt-6 space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Overall Performance</span>
                  <span className="text-sm font-medium">{overallStats.average}%</span>
                </div>
                <Progress value={overallStats.average} className="h-2" />
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-muted p-3 rounded-lg">
                  <div className="flex items-center gap-2 text-sm font-medium mb-1">
                    <Medal size={16} /> Highest
                  </div>
                  <p className="text-xs">{overallStats.highest}</p>
                </div>
                
                <div className="bg-muted p-3 rounded-lg">
                  <div className="flex items-center gap-2 text-sm font-medium mb-1">
                    <AlertTriangle size={16} /> Lowest
                  </div>
                  <p className="text-xs">{overallStats.lowest}</p>
                </div>
                
                <div className="bg-muted p-3 rounded-lg">
                  <div className="flex items-center gap-2 text-sm font-medium mb-1">
                    <CheckCircle2 size={16} /> Pass Rate
                  </div>
                  <p className="text-xs">{overallStats.passRate}</p>
                </div>
                
                <div className="bg-muted p-3 rounded-lg">
                  <div className="flex items-center gap-2 text-sm font-medium mb-1">
                    <Clock size={16} /> Progress
                  </div>
                  <p className="text-xs">{overallStats.examsTaken}/{overallStats.examsTaken + overallStats.examsRemaining} Exams</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="w-full md:w-2/3 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <BarChart className="h-5 w-5" />
                Exam Results
              </CardTitle>
              <CardDescription>View your performance across all subjects</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="results" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="results">Subject Results</TabsTrigger>
                  <TabsTrigger value="details">Detailed Analysis</TabsTrigger>
                </TabsList>
                
                <TabsContent value="results">
                  <div className="space-y-4">
                    {examResults.map((exam, index) => (
                      <div 
                        key={index} 
                        className={`p-4 border rounded-lg cursor-pointer transition-all ${
                          selectedExam.subject === exam.subject ? "border-primary bg-muted/50" : "hover:bg-muted/30"
                        }`}
                        onClick={() => setSelectedExam(exam)}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">{exam.subject}</h3>
                          <Badge variant={exam.score >= 90 ? "default" : exam.score >= 80 ? "secondary" : "outline"}>
                            {exam.grade}
                          </Badge>
                        </div>
                        
                        <div className="flex justify-between items-center text-sm mb-1">
                          <span>Score</span>
                          <span className="font-medium">{exam.score}/{exam.maxScore}</span>
                        </div>
                        
                        <Progress value={(exam.score / exam.maxScore) * 100} className="h-2" />
                        
                        <div className="flex justify-between items-center mt-2 text-xs text-muted-foreground">
                          <span>Teacher: {exam.teacher}</span>
                          <span>Date: {new Date(exam.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="details">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{selectedExam.subject}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge variant={selectedExam.score >= 90 ? "default" : selectedExam.score >= 80 ? "secondary" : "outline"}>
                          {selectedExam.grade}
                        </Badge>
                        <CardDescription>Score: {selectedExam.score}/{selectedExam.maxScore}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium mb-1">Feedback</h4>
                          <p className="text-sm text-muted-foreground">{selectedExam.feedback}</p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-medium mb-1">Teacher</h4>
                            <p className="text-sm text-muted-foreground">{selectedExam.teacher}</p>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-medium mb-1">Exam Date</h4>
                            <p className="text-sm text-muted-foreground">{new Date(selectedExam.date).toLocaleDateString()}</p>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium mb-1">Performance</h4>
                          <div className="h-4 w-full bg-muted rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${
                                selectedExam.score >= 90 ? "bg-green-500" : 
                                selectedExam.score >= 80 ? "bg-blue-500" : 
                                selectedExam.score >= 70 ? "bg-yellow-500" : 
                                "bg-red-500"
                              }`}
                              style={{ width: `${(selectedExam.score / selectedExam.maxScore) * 100}%` }}
                            />
                          </div>
                          <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                            <span>0</span>
                            <span>25</span>
                            <span>50</span>
                            <span>75</span>
                            <span>100</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Upcoming Exams</CardTitle>
              <CardDescription>Prepare for your remaining tests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                  <div>
                    <h4 className="font-medium">Computer Science</h4>
                    <p className="text-sm text-muted-foreground">Prof. Anderson</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">May 5, 2025</p>
                    <p className="text-sm text-muted-foreground">10:30 AM</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                  <div>
                    <h4 className="font-medium">History</h4>
                    <p className="text-sm text-muted-foreground">Ms. Parker</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">May 12, 2025</p>
                    <p className="text-sm text-muted-foreground">1:15 PM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}