# 

Source: https://proofwiki.org/wiki/Characterization_of_Injective_Linear_Transformations_with_Closed_Image



Theorem
Let $\struct {X, \norm {\, \cdot \,}_X}$ and $\struct {Y, \norm {\, \cdot \,}_Y}$ be Banach spaces. 
Let $T : X \to Y$ be a bounded linear transformation.

Then $T$ is injective and $\Img T$ is closed if and only if:

there exists $c > 0$ such that $\norm {T x}_Y \ge c \norm x_X$ for each $x \in X$.


Corollary
Let $\struct {X, \norm {\, \cdot \,}_X}$ and $\struct {Y, \norm {\, \cdot \,}_Y}$ be Banach spaces. 
Let $T : X \to Y$ be a bounded linear transformation.

Then $T$ is injective and $\Img T$ is closed if and only if:

there does not exist a sequence $\sequence {x_n}_{n \mathop \in \N}$ with $\norm {x_n} = 1$ for each $n \in \N$ such that $T x_n \to {\mathbf 0}_Y$.


Proof
Sufficient Condition
Suppose that:

there exists $c > 0$ such that $\norm {T x}_Y \ge c \norm x_X$ for each $x \in X$.
First, if $T x = {\mathbf 0}_Y$ for some $x \in X$, then we have:

$c \norm x_X \le 0$
Since $c > 0$ and $\norm x_X \ge 0$, we have $\norm x_X = 0$.
Hence by Norm Axiom $\text N 1$: Positive Definiteness, we have $x = {\mathbf 0}_X$.
So $T$ is injective.

Now let $\sequence {y_n}_{n \mathop \in \N}$ be a sequence in $\Img T$ such that $y_n \to y$ with $y \in Y$. 
We show that $y \in \Img T$. 
Then there exists a sequence $\sequence {x_n}_{n \mathop \in \N}$ in $X$ such that $y_n = T x_n$ for each $n \in \N$.
Then:

$\norm {x_n - x_m}_X \le c^{-1} \norm {T x_n - T x_m}_Y = c^{-1} \norm {y_n - y_m}_Y$
from the linearity of $T$.
Since $\sequence {y_n}_{n \mathop \in \N}$ is convergent, it is Cauchy by Convergent Sequence is Cauchy Sequence.
Let $\epsilon > 0$.
Since $\sequence {y_n}_{n \mathop \in \N}$ is Cauchy, there exists $N \in \N$ such that:

$\norm {y_n - y_m} < c \epsilon$ for $n, m \ge N$.
Then for $n, m \ge N$, we have $\norm {x_n - x_m}_X < \epsilon$.
So $\sequence {x_n}_{n \mathop \in \N}$ is Cauchy.
Since $X$ is Banach, $\sequence {x_n}_{n \mathop \in \N}$ converges to $x \in X$.
Hence since $T$ is bounded, we have $T x_n \to T x$ from Continuous Mapping is Sequentially Continuous.
That is, $y_n \to T x$ with $T x \in \Img T$. 
So:

whenever $\sequence {y_n}_{n \mathop \in \N}$ is a sequence in $\Img T$ converging to $y \in Y$, we have $y \in \Img T$.
Hence $\Img T$ is closed.
$\Box$

Necessary Condition
Suppose that $T$ is injective and $\Img T$ is closed.
Then $T$ is a linear isomorphism $X \to \Img T$.
From Closed Subspace of Banach Space forms Banach Space, $\struct {\Img T, \norm {\, \cdot \,}_Y}$ is a Banach space. 
Hence from the Banach Isomorphism Theorem, the inverse $T^{-1} : \Img T \to X$ is bounded.
That is, there exists $M > 0$ such that:

$\norm {T^{-1} y}_X \le M \norm y_Y$ for each $y \in \Img T$.
We have $y \in \Img T$ if and only if $y = T x$ for some $x \in X$.
So we have:

$\norm {\map {T^{-1} } {T x} }_X \le M \norm {T x}_Y$
so:

$\norm x_X \le M \norm {T x}_Y$
giving:

$\norm {T x}_Y \ge M^{-1} \norm x_X$ for each $x \in X$.
$\blacksquare$





