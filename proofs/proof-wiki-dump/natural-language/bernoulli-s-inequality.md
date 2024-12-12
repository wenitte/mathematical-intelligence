# 

Source: https://proofwiki.org/wiki/Bernoulli%27s_Inequality



Theorem
Let $x \in \R$ be a real number such that $x > -1$.
Let $n \in \Z_{\ge 0}$ be a positive integer.

Then:

$\paren {1 + x}^n \ge 1 + n x$


Corollary
Let $x \in \R$ be a real number such that $0 < x < 1$.
Let $n \in \Z_{\ge 0}$ be a positive integer.

Then:

$\paren {1 - x}^n \ge 1 - n x$


Proof 1
Proof by induction:
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$\paren {1 + x}^n \ge 1 + nx$


Basis for the Induction
$\map P 0$ is the case:

$\paren {1 + x}^0 \ge 1$
so $\map P 0$ holds.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 0$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\left({1 + x}\right)^k \ge 1 + kx$

We need to show that:

$\paren {1 + x}^{k + 1} \ge 1 + \paren {k + 1} x$


Induction Step
This is our induction step:














\(\ds \paren {1 + x}^{k + 1}\)

\(=\)







\(\ds \paren {1 + x}^k \paren {1 + x}\)




















\(\ds \)

\(\ge\)







\(\ds \paren {1 + k x} \paren {1 + x}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds 1 + \paren {k + 1} x + k x^2\)




















\(\ds \)

\(\ge\)







\(\ds 1 + \paren {k + 1} x\)









So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.
$\blacksquare$


Proof 2
Let $y = 1 + x$.
Then $y \ge 0$, and:

$\paren {1 + x}^n = 1 + \paren {y^n - 1}$
If $y \ge 1$, then by Sum of Geometric Sequence:

$\ds y^n - 1 = \paren {y - 1} \sum_{k \mathop = 0}^{n - 1} y^k \ge n \paren {y - 1} = n x$
If $y < 1$, then by Sum of Geometric Sequence:

$\ds y^n - 1 = -\paren {1 - y} \sum_{k \mathop = 0}^{n - 1} y^k \ge -n \paren {1 - y} = n x$
Hence the result.
$\blacksquare$


Source of Name
This entry was named for Jacob Bernoulli.





