# 

Source: https://proofwiki.org/wiki/Chebyshev_Distance_on_Real_Vector_Space_is_Metric



Theorem
The Chebyshev distance on $\R^n$:

$\ds \forall x, y \in \R^n: \map {d_\infty} {x, y}:= \max_{i \mathop = 1}^n {\size {x_i - y_i} }$
is a metric.


Proof 1
This is an instance of the Chebyshev distance on the cartesian product of metric spaces $A_1, A_2, \ldots, A_3$.
This is proved in Chebyshev Distance is Metric.
$\blacksquare$


Proof 2
Proof of Metric Space Axiom $(\text M 1)$













\(\ds \map {d_\infty} {x, x}\)

\(=\)







\(\ds \max_{i \mathop = 1}^n \size {x_i - x_i}\)





Definition of $d_\infty$














\(\ds \)

\(=\)







\(\ds 0\)









So Metric Space Axiom $(\text M 1)$ holds for $d_\infty$.
$\Box$


Proof of Metric Space Axiom $(\text M 2)$: Triangle Inequality
Let $k \in \closedint 1 n$ such that:














\(\ds \size {x_k - z_k}\)

\(=\)







\(\ds \max_{i \mathop = 1}^n \size {x_i - z_i}\)




















\(\ds \)

\(=\)







\(\ds \map {d_\infty} {x, z}\)









Then by the Triangle Inequality for Real Numbers:

$\size {x_k - z_k} \le \size {x_k - y_k} + \size {y_k - z_k}$
But by the nature of the $\max$ operation:

$\ds \size {x_k - y_k} \le \max_{i \mathop = 1}^n \size {x_i - y_i}$
and:

$\ds \size {y_k - z_k} \le \max_{i \mathop = 1}^n \size {y_i - z_i}$
Thus:

$\ds \size {x_k - y_k} + \size {y_k - z_k} \le \max_{i \mathop = 1}^n \size {x_i - y_i} + \max_{i \mathop = 1}^n \size {y_i - z_i}$
Hence:

$\map {d_\infty} {x, z} \le \map {d_\infty} {x, y} + \map {d_\infty} {y, z}$
So Metric Space Axiom $(\text M 2)$: Triangle Inequality holds for $d_\infty$.
$\Box$


Proof of Metric Space Axiom $(\text M 3)$













\(\ds \map {d_\infty} {x, y}\)

\(=\)







\(\ds \max_{i \mathop = 1}^n \size {x_i - y_i}\)





Definition of $d_\infty$














\(\ds \)

\(=\)







\(\ds \max_{i \mathop = 1}^n \size {y_i - x_i}\)





Definition of Absolute Value














\(\ds \)

\(=\)







\(\ds \map {d_\infty} {y, x}\)





Definition of $d_\infty$



So Metric Space Axiom $(\text M 3)$ holds for $d_\infty$.
$\Box$


Proof of Metric Space Axiom $(\text M 4)$
Let $x = \tuple {x_1, x_2, \ldots, x_n}$ and $y = \tuple {y_1, y_2, \ldots, y_n}$.














\(\ds x\)

\(\ne\)







\(\ds y\)














\(\ds \leadsto \ \ \)

\(\ds \exists k \in \closedint 1 n: \, \)



\(\ds x_k\)

\(\ne\)







\(\ds y_k\)














\(\ds \leadsto \ \ \)





\(\ds \size {x_k - y_k}\)

\(>\)







\(\ds 0\)





Definition of Absolute Value








\(\ds \leadsto \ \ \)





\(\ds \max_{i \mathop = 1}^n \size {x_i - y_i}\)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \map {d_\infty} {x, y}\)

\(>\)







\(\ds 0\)





Definition of $d_\infty$



So Metric Space Axiom $(\text M 4)$ holds for $d_\infty$.
$\blacksquare$





