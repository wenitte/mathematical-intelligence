# 

Source: https://proofwiki.org/wiki/Cardinality_of_Set_Union/Examples/Student_Subjects/Mathematics_and_Chemistry

Example of Use of Cardinality of Set Union
In a particular group of $75$ students, all studied at least one of the subjects mathematics, physics and chemistry.
All candidates attempted at least one of the questions.

$40$ students studied mathematics.
$60$ students studied physics.
$25$ students studied chemistry.
Also:

exactly $5$ students studied all $3$ subjects.

It follows that:

no more than $20$ students studied both mathematics and chemistry.


Proof
Let:

$S_1$ denote the set of students who studied mathematics.
$S_2$ denote the set of students who studied physics.
$S_3$ denote the set of students who studied chemistry.
Knowledge of the total number of students gives us:

$S_1 \cup S_2 \cup S_3 = 75$

Let $N$ denote the number of students $N$ who studied both mathematics and chemistry:

$N = S_1 \cap S_3$

From the question:














\(\ds \card {S_1}\)

\(=\)







\(\ds 40\)




















\(\ds \card {S_2}\)

\(=\)







\(\ds 60\)




















\(\ds \card {S_3}\)

\(=\)







\(\ds 25\)










First we calculate how many students took just mathematics or chemistry, but who did not take physics.
We have














\(\ds \card {\paren {S_1 \cup S_3} \setminus S_2}\)

\(=\)







\(\ds \card {\paren {S_1 \cup S_2 \cup S_3} \setminus S_2}\)




















\(\ds \)

\(=\)







\(\ds \card {S_1 \cup S_2 \cup S_3} - \card {S_2}\)




















\(\ds \)

\(=\)







\(\ds 75 - 60\)




















\(\ds \)

\(=\)







\(\ds 15\)










So only $15$ students did not take physics.
Thus no more than $15$ students can have taken both mathematics and chemistry, without taking physics.
However, we are also told that $5$ students took all $3$ courses.
So, in addition to the maximum $15$ who took mathematics and chemistry, without taking physics, this takes the total to a maximum of $20$ students all told who took both mathematics and chemistry.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 1$. Sets; inclusion; intersection; union; complementation; number systems: Exercise $10 \ \text {(c)}$




