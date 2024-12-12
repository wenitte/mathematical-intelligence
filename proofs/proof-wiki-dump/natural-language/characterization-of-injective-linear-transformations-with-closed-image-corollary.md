# 

Source: https://proofwiki.org/wiki/Characterization_of_Injective_Linear_Transformations_with_Closed_Image/Corollary



Corollary
Let $\struct {X, \norm {\, \cdot \,}_X}$ and $\struct {Y, \norm {\, \cdot \,}_Y}$ be Banach spaces. 
Let $T : X \to Y$ be a bounded linear transformation.

Then $T$ is injective and $\Img T$ is closed if and only if:

there does not exist a sequence $\sequence {x_n}_{n \mathop \in \N}$ with $\norm {x_n} = 1$ for each $n \in \N$ such that $T x_n \to {\mathbf 0}_Y$.


Proof
By Proof by Contraposition, we want to show that:

there exists a sequence $\sequence {x_n}_{n \mathop \in \N}$ with $\norm {x_n} = 1$ for each $n \in \N$ such that $T x_n \to {\mathbf 0}_Y$ if and only if either $T$ is not injective or $\Img T$ is not closed.
Sufficient Condition
Suppose that:

either $T$ is not injective or $\Img T$ is not closed.
Then from Characterization of Injective Linear Transformations with Closed Range:

there does not exist $c > 0$ such that $\norm {T x}_Y \ge c \norm x_X$ for each $x \in X$.
So:

for each $n \in \N$, there exists $u_n \in X$ such that $\norm {T u_n}_Y < n^{-1} \norm {u_n}_X$ for each $n \in \N$.
Since $\norm {u_n}_X > 0$, we have $u_n \ne {\mathbf 0}_X$ by Norm Axiom $\text N 1$: Positive Definiteness. 
We then have:

$\norm {T x_n} < n^{-1}$ for each $n \in \N$
where:

$\ds x_n = \frac {u_n} {\norm {u_n} }$
We then have $T x_n \to {\mathbf 0}_Y$. 
By Norm Axiom $\text N 2$: Positive Homogeneity, we have $\norm {x_n}_X = 1$ for each $n \in \N$.
$\Box$


Necessary Condition
Suppose that:

there exists a sequence $\sequence {x_n}_{n \mathop \in \N}$ with $\norm {x_n} = 1$ for each $n \in \N$ such that $T x_n \to {\mathbf 0}_Y$
Aiming for a contradiction, suppose there exists $c > 0$ such that:

$\norm {T x}_Y \ge c \norm x_X$ for each $x \in \HH$.
Then we have:

$\norm {T x_n}_Y \ge c \norm {x_n}_X = c$ for each $n \in \N$.
We then have $T x_n \to {\mathbf 0}_Y$ as $n \to \infty$, so $\norm {T x_n} \to 0$, contradicting that $c > 0$. 
So there does not exist $c > 0$ such that:

$\norm {T x}_Y \ge c \norm x_X$ for each $x \in \HH$.
Hence by Characterization of Injective Linear Transformations with Closed Range:

either $T$ is not injective or $\Img T$ is not closed.
$\blacksquare$





