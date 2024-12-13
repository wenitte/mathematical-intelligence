# 

Source: https://proofwiki.org/wiki/Monotone_Real_Function_is_Measurable

Theorem
Let $I \subseteq \R$ be an open interval.
Let $\map \BB I$ and $\map \BB \R$ be the Borel $\sigma$-algebras of $I$ and $\R$ respectively.
Let $F : \R \to \R$ be a monotone function.

Then $F$ is $\map \BB I/\map \BB \R$-measurable.


Proof
We first assume that $F$ is increasing.
From Borel Sigma-Algebra of Subset is Trace Sigma-Algebra, $\map \BB I$ is the trace $\sigma$-algebra of $I$ in $\map \BB \R$. 
From Characterization of Measurable Functions, it is enough to show that:

$J_t = \set {x \in I : \map F x \le t} \in \map \BB I$ for each $t \in \R$.
From Measure of Interval is Length and the definition of the trace $\sigma$-algebra, it is enough to show that $J_t$ is an interval for each $t \in \R$.
Fix $t \in \R$. 
Suppose that $x \in J_t$ and $y \in \R$ with $y \le z$. 
Since $F$ is increasing, we have:

$\map F z \le \map F y \le t$.
In particular, $\map F z \le t$ and $z \in J_t$.
Hence $J_t$ is a real interval that is unbounded below.
Hence $J_t \in \map \BB I$ from Measure of Interval is Length and the definition of the trace $\sigma$-algebra.
Hence by Characterization of Measurable Functions, $F$ is $\map \BB I/\map \BB \R$-measurable.

Now suppose that $F$ is decreasing.
Then $-F$ is increasing.
Hence from the previous case, $-F$ is $\map \BB I/\map \BB \R$-measurable.
From Pointwise Scalar Multiple of Measurable Function is Measurable, $F$ is $\map \BB I/\map \BB \R$-measurable.
$\blacksquare$





