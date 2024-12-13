# 

Source: https://proofwiki.org/wiki/Outer_Jordan_Content_of_Dilation

Theorem
Let $M \subseteq \R^n$ be a bounded subspace of Euclidean $n$-space.
Let $c_1, c_2, \dotsc, c_n \in \R_{\ge 0}$ be non-negative real numbers.
Let $M' \subseteq \R^n$ be defined as:

$M' = \set {\tuple {c_1 x_1, c_2 x_2, \dotsc, c_n x_n} : \tuple {x_1, x_2, \dotsc, x_n} \in \R^n}$

Then:

$\map {m^*} {M'} = c_1 c_2 \dotsm c_n \map {m^*} M$
where $m^*$ denotes the outer Jordan content.


This article, or a section of it, needs explaining.In particular: What is the "dilation" that is mentioned in the title?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Proof
Let $\epsilon > 0$ be arbitrary.
By Characterizing Property of Infimum of Subset of Real Numbers, let $C$ be a finite covering of $M$ by closed $n$-rectangles such that:

$\ds \sum_{R \mathop \in C} \map V C < \map {m^*} M + \frac \epsilon {c_1 c_2 \dotsm c_n + 1}$
Let $C'$ be defined as:

$\ds C' = \set {\closedint {c_1 a_1} {c_1 b_1} \times \dotso \times \closedint {c_n a_n} {c_n b_n} : \closedint {a_1} {b_1} \times \dotso \times \closedint {a_n} {b_n} \in C}$

For any $\tuple {c_1 x_1, \dotsc, c_n x_n} \in M'$, there must be some:

$R = \closedint {a_1} {b_1} \times \dotso \times \closedint {a_n} {b_n} \in C$
such that:

$\tuple {x_1, \dotsc, x_n} \in R$
by definition of a covering.
That is:














\(\ds a_1\)

\(\le\)

\(\, \ds x_1 \, \)



\(\, \ds \le \, \)

\(\ds b_1\)




















\(\ds a_2\)

\(\le\)

\(\, \ds x_2 \, \)



\(\, \ds \le \, \)

\(\ds b_2\)




















\(\ds \)

\(\)

\(\, \ds \vdots \, \)





\(\ds \)




















\(\ds a_n\)

\(\le\)

\(\, \ds x_n \, \)



\(\, \ds \le \, \)

\(\ds b_n\)









Therefore, by Real Number Ordering is Compatible with Multiplication:














\(\ds c_1 a_1\)

\(\le\)

\(\, \ds c_1 x_1 \, \)



\(\, \ds \le \, \)

\(\ds c_1 b_1\)




















\(\ds c_2 a_2\)

\(\le\)

\(\, \ds c_2 x_2 \, \)



\(\, \ds \le \, \)

\(\ds c_2 b_2\)




















\(\ds \)

\(\)

\(\, \ds \vdots \, \)





\(\ds \)




















\(\ds c_n a_n\)

\(\le\)

\(\, \ds c_n x_n \, \)



\(\, \ds \le \, \)

\(\ds c_n b_n\)









Or, in other words:

$\tuple {c_1 x_1, \dotsc, c_n x_n} \in \closedint {c_1 a_1} {c_1 b_1} \times \dotso \times \closedint {c_n a_n} {c_n b_n} \in C'$
Hence:

$C'$ is a finite covering of $M'$ by closed $n$-rectangles.
Therefore:














\(\ds \map {m^*} {M'}\)

\(\le\)







\(\ds \sum_{R \mathop \in C'} \map V R\)





Definition of Outer Jordan Content














\(\ds \)

\(=\)







\(\ds \sum_{\sqbrk {\closedint {\mathbf a} {\mathbf b} } \mathop \in C} \prod_{i \mathop = 1}^n \paren {c_i b_i - c_i a_i}\)





$\map V R$ as in Definition of Outer Jordan Content














\(\ds \)

\(=\)







\(\ds \sum_{\sqbrk {\closedint {\mathbf a} {\mathbf b} } \mathop \in C} \prod_{i \mathop = 1}^n c_i \paren {b_i - a_i}\)




















\(\ds \)

\(=\)







\(\ds \sum_{\sqbrk {\closedint {\mathbf a} {\mathbf b} } \mathop \in C} c_1 c_2 \dotsm c_n \prod_{i \mathop = 1}^n \paren {b_i - a_i}\)




















\(\ds \)

\(=\)







\(\ds c_1 c_2 \dotsm c_n \sum_{R \mathop \in C} \map V C\)





$\map V R$ as in Definition of Outer Jordan Content














\(\ds \)

\(\le\)







\(\ds c_1 c_2 \dotsm c_n \paren {\map {m^*} M + \frac \epsilon {c_1 c_2 \dotsm c_n + 1} }\)





By construction of $C$














\(\ds \)

\(=\)







\(\ds c_1 c_2 \dotsm c_n \map {m^*} M + \frac {c_1 c_2 \dotsm c_n} {c_1 c_2 \dotsm c_n + 1} \epsilon\)




















\(\ds \)

\(<\)







\(\ds c_1 c_2 \dotsm c_n \map {m^*} M + \epsilon\)









As $\epsilon > 0$ was arbitrary, it follows from Real Plus Epsilon that:

$\map {m^*} {M'} \le c_1 c_2 \dotsm c_n \map {m^*} M$
$\Box$

Now, if every $c_i > 0$, we have that:

$M = \set {\tuple {\frac 1 {c_1} x_1, \dotsc, \frac 1 {c_n} x_n} : \tuple {x_1, \dotsc, x_n} \in M'}$
Therefore, the above argument can be applied with the roles of $M$ and $M'$ interchanged to prove that:

$\map {m^*} M \le \frac 1 {c_1 c_2 \dotsm c_n} \map {m^*} {M'}$
which is to say:

$c_1 c_2 \dotsm c_n \map {m^*} M \le \map {m^*} {M'}$

If the above does not hold, then $c_i = 0$ for some $i \in \set {1, 2, \dotsc, n}$.
Then:

$c_1 c_2 \dotsm c_n \map {m^*} M = 0 \le \map {m^*} {M'}$

In either case, we have:

$c_1 c_2 \dotsm c_n \map {m^*} M \le \map {m^*} {M'}$
The result follows from the two inequalities.
$\blacksquare$





