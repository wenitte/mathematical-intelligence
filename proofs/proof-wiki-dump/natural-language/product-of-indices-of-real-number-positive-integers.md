# 

Source: https://proofwiki.org/wiki/Product_of_Indices_of_Real_Number/Positive_Integers



Theorem
Let $r \in \R_{> 0}$ be a positive real number.
Let $n, m \in \Z_{\ge 0}$ be positive integers.
Let $r^n$ be defined as $r$ to the power of $n$.

Then:

$\paren {r^n}^m = r^{n m}$


Proof
Proof by induction on $m$:
For all $m \in \Z_{\ge 0}$, let $\map P m$ be the proposition:

$\forall n \in \Z_{\ge 0}: \paren {r^n}^m = r^{n m}$

$\map P 0$ is true, as this just says:

$\paren {r^n}^0 = 1 = r^0 = r^{n \times 0}$


Basis for the Induction
$\map P 1$ is true, by definition of power to an integer:

$\paren {r^n}^1 = r^n = r^{n \times 1}$
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 0$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\forall n \in \Z_{\ge 0}: \paren {r^n}^k = r^{n k}$

Then we need to show:

$\forall n \in \Z_{\ge 0}: \paren {r^n}^{\paren {k + 1} } = r^{n \paren {k + 1} }$


Induction Step
This is our induction step:















\(\ds \paren {r^n}^{\paren {k + 1} }\)

\(=\)







\(\ds \paren {\paren {r^n}^k} \times r^n\)





Definition of Integer Power














\(\ds \)

\(=\)







\(\ds r^{n k} \times r^n\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds r^{n k + n}\)





Sum of Indices














\(\ds \)

\(=\)







\(\ds r^{n \paren {k + 1} }\)





Integer Multiplication Distributes over Addition



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n, m \in \Z_{\ge 0}: \paren {r^n}^m = r^{n m}$
$\blacksquare$


Sources
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 0.1$. Arithmetic: Example $1: \ \text{II}$




