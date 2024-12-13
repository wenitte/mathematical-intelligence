# 

Source: https://proofwiki.org/wiki/Sequential_Characterization_of_Closed_Linear_Transformation



Theorem
Let $\struct {X, \norm {\, \cdot \,}_X}$ and $\struct {Y, \norm {\, \cdot \,}_Y}$ be Banach spaces.
Let $\map D T$ be a linear subspace of $X$.
Let $T : \map D T \to Y$ be a linear transformation.

Then $T$ is closed if and only if:

for each convergent sequence $\sequence {x_n}_{n \in \N}$ in $\struct {X, \norm {\, \cdot \,}_X}$ valued in $\map D T$ such that $\sequence {T x_n}_{n \in \N}$ converges in $\struct {Y, \norm {\, \cdot \,}_Y}$, we have:
$\ds \lim_{n \mathop \to \infty} x_n \in \map D T$
and:
$\ds \lim_{n \mathop \to \infty} T x_n = \map T {\lim_{n \mathop \to \infty} x_n}$


Proof
Let $\struct {X \times Y, \norm \cdot_{X \times Y} }$ be the direct product $X \times Y$ equipped with the direct product norm.
From Direct Product of Banach Spaces is Banach Space, $\struct {X \times Y, \norm \cdot_{X \times Y} }$ is a Banach space. 
Let:

$\map G T = \set {\tuple {x, T x} \in X \times Y : x \in \map D T}$
be the graph of $T$.


Necessary Condition
Suppose that $T$ is closed.
Then $\map G T$ is closed in $X \times Y$. 
Let $\sequence {x_n}_{n \in \N}$ be a convergent sequence in $\struct {X, \norm {\, \cdot \,}_X}$ with limit $x$ such that $\sequence {T x_n}_{n \in \N}$ converges in $\struct {Y, \norm {\, \cdot \,}_Y}$ to a limit $y$.
From Convergence in Direct Product Norm, we have:

$\tuple {x_n, T x_n} \to \tuple {x, y}$ in $\struct {X \times Y, \norm \cdot_{X \times Y} }$.
Since $\map G T$ is closed in $X \times Y$ and $\tuple {x_n, T x_n} \in \map G T$ for each $n \in \N$, we have:

$\tuple {x, y} \in \map G T$
Hence $x \in \map D T$ and $y = T x$. 
$\Box$


Sufficient Condition
Suppose that:

for each convergent sequence $\sequence {x_n}_{n \in \N}$ in $\struct {X, \norm {\, \cdot \,}_X}$ valued in $\map D T$ such that $\sequence {T x_n}_{n \in \N}$ converges in $\struct {Y, \norm {\, \cdot \,}_Y}$, we have:
$\ds \lim_{n \mathop \to \infty} x_n \in \map D T$
and:
$\ds \lim_{n \mathop \to \infty} T x_n = \map T {\lim_{n \mathop \to \infty} x_n}$
Let $\sequence {\tuple {x_n, T x_n} }_{n \in \N}$ be a sequence in $\struct {X \times Y, \norm \cdot_{X \times Y} }$ valued in $\map G T$ converging to $\tuple {x, y}$.
From Convergence in Direct Product Norm, we have:

$x_n \to x$
and:

$T x_n \to y$
for some $x \in X$ and $y \in Y$.
By hypothesis, we have $x \in \map D T$ and $y = T x$. 
Hence from Convergence in Direct Product Norm, we have:

$\ds \lim_{n \mathop \to \infty} \tuple {x_n, T x_n} = \tuple {x, T x} \in \map G T$
Hence $\map G T$ is closed.
$\blacksquare$





