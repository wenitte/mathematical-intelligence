# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/57_-_A_Misunderstanding/Solution



Modern Puzzles by Henry Ernest Dudeney: $57$
A Misunderstanding
An American correspondent asks me to find a number composed of any number of digits that may be correctly divided by $2$
by simply transferring the last figure to the beginning.
He has apparently come across our last puzzle with the conditions wrongly stated.
If you are to transfer the first figure to the end it is solved by $315 \, 789 \, 473 \, 684 \, 210 \, 526$,
and a solution may easily be found from this with any given figure at the beginning.
But if the figure is to be moved from the end to the beginning, there is no possible solution for the divisor $2$.
But there is a solution for the divisor $3$.
Can you find it?


Solution
$\dfrac {857142} 3 = 285714$


Proof
We are being asked to find a number:

$N = \sqbrk {a_k a_{k - 1} \ldots a_2 a_1}_{10}$
such that:

$\dfrac N 3 = \sqbrk {a_1 a_k a_{k - 1} \ldots a_2}_{10}$
where $a_1$ is required to be $2$.
We extract the general case below:


This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: The below may be worth generating a page forYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.

Let $q$ be the rational number which can be expressed as:

$q = 0 \cdotp \dot a_k a_{k - 1} \ldots a_2 \dot a_1$
such that:

$\dfrac q 3 = 0 \cdotp \dot a_1 a_k a_{k - 1} \ldots \dot a_2$

Then:














\(\ds 10 \dfrac q 3\)

\(=\)







\(\ds a_1 \cdotp \dot a_k a_{k - 1} \ldots a_2 \dot a_1\)














\(\ds \leadsto \ \ \)





\(\ds 10 \dfrac q 3 - a_1\)

\(=\)







\(\ds 0 \cdotp \dot a_k a_{k - 1} \ldots a_2 \dot a_1\)




















\(\ds \)

\(=\)







\(\ds q\)














\(\ds \leadsto \ \ \)





\(\ds 10 q - 3 a_k\)

\(=\)







\(\ds 3 q\)














\(\ds \leadsto \ \ \)





\(\ds q\)

\(=\)







\(\ds \dfrac 3 {a_k} 7\)









From the construction of the problem, the possible values for $a_1$ are $1$ and $2$, giving:














\(\ds q\)

\(=\)







\(\ds \dfrac 3 7\)




















\(\ds q\)

\(=\)







\(\ds \dfrac 6 7\)









as possible answers.

From 7 is Cyclic Number:















\(\ds \dfrac 1 7\)

\(=\)







\(\ds 0 \cdotp \dot 14285 \dot 7\)




















\(\ds \dfrac 2 7\)

\(=\)







\(\ds 0 \cdotp \dot 28571 \dot 4\)




















\(\ds \dfrac 3 7\)

\(=\)







\(\ds 0 \cdotp \dot 42857 \dot 1\)




















\(\ds \dfrac 4 7\)

\(=\)







\(\ds 0 \cdotp \dot 57142 \dot 8\)




















\(\ds \dfrac 5 7\)

\(=\)







\(\ds 0 \cdotp \dot 74285 \dot 5\)




















\(\ds \dfrac 6 7\)

\(=\)







\(\ds 0 \cdotp \dot 85714 \dot 2\)









$q = 6 \times 0 \cdotp \dot 14285 \dot 7 = 0 \cdotp \dot 85714 \dot 2$
which leads us to:

$N = 857142$















\(\ds N\)

\(=\)







\(\ds 428571\)





for $q = \dfrac 3 7$, that is, $a_1 = 1$














\(\ds q\)

\(=\)







\(\ds 857142\)





for $q = \dfrac 6 7$, that is, $a_1 = 2$




So the specific answer required was:

$\dfrac {857142} 3 = 285714$
while we also have:

$\dfrac {428571} 3 = 142857$
$\blacksquare$


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $57$. -- A Misunderstanding
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $108$. A Misunderstanding




