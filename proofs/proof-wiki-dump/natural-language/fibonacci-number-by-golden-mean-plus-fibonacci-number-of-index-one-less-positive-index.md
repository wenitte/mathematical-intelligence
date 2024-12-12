# 

Source: https://proofwiki.org/wiki/Fibonacci_Number_by_Golden_Mean_plus_Fibonacci_Number_of_Index_One_Less/Positive_Index



Theorem
Let $n \in \Z_{\ge 0}$.
Then:

$\phi^n = F_n \phi + F_{n - 1}$
where:

$F_n$ denotes the $n$th Fibonacci number
$\phi$ denotes the golden mean.


Proof
The proof proceeds by induction.
For all $n \in \Z_{\ge 0}$, let $P \left({n}\right)$ be the proposition:

$\phi^n = F_n \phi + F_{n - 1}$

$P \left({0}\right)$ is the case:














\(\ds F_0 \times \phi + F_{-1}\)

\(=\)







\(\ds F_0 \times \phi + \left({-1}\right)^0 F_1\)





Fibonacci Number with Negative Index














\(\ds \)

\(=\)







\(\ds F_0 \times \phi + 1\)





Definition of Fibonacci Number $F_1 = 1$














\(\ds \)

\(=\)







\(\ds 0 \times \phi + 1\)





Definition of Fibonacci Number $F_0 = 0$














\(\ds \)

\(=\)







\(\ds 1\)




















\(\ds \)

\(=\)







\(\ds \phi^0\)










Thus $P \left({0}\right)$ is seen to hold.


Basis for the Induction
$P \left({1}\right)$ is the case:














\(\ds F_1 \times \phi + F_0\)

\(=\)







\(\ds F_1 \times \phi\)





Definition of Fibonacci Number $F_0 = 0$














\(\ds \)

\(=\)







\(\ds 1 \times \phi\)





Definition of Fibonacci Number $F_1 = 1$














\(\ds \)

\(=\)







\(\ds \phi^1\)










Thus $P \left({1}\right)$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $P \left({k}\right)$ is true, where $k \ge 1$, then it logically follows that $P \left({k + 1}\right)$ is true.

So this is the induction hypothesis:

$\phi^k = F_k \phi + F_{k - 1}$

from which it is to be shown that:

$\phi^{k + 1} = F_{k + 1} \phi + F_k$


Induction Step
This is the induction step:















\(\ds F_{k + 1} \phi + F_k\)

\(=\)







\(\ds \left({F_k + F_{k - 1} }\right) \phi + F_k\)





Definition of Fibonacci Number














\(\ds \)

\(=\)







\(\ds F_k \left({1 + \phi}\right) + F_{k - 1} \phi\)




















\(\ds \)

\(=\)







\(\ds F_k \phi^2 + F_{k - 1} \phi\)





Square of Golden Mean equals One plus Golden Mean














\(\ds \)

\(=\)







\(\ds \phi \left({F_k \phi + F_{k - 1} }\right)\)




















\(\ds \)

\(=\)







\(\ds \phi \left({\phi^n}\right)\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \phi^{n + 1}\)










So $P \left({k}\right) \implies P \left({k + 1}\right)$ and it follows by the Principle of Mathematical Induction that:

$\forall n \in \Z_{\ge 0}: \phi^n = F_n \phi + F_{n - 1}$
$\blacksquare$





