# 

Source: https://proofwiki.org/wiki/Hellinger-Toeplitz_Theorem/Proof_1

Theorem
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space.
Let $T : \HH \to \HH$ be a Hermitian operator.
That is: 

$\innerprod {T x} y = \innerprod x {T y}$ for each $x, y \in \HH$.

Then: 

$T$ is bounded.


Proof
Let $\struct {\HH \times \HH, \norm \cdot_{\HH \times \HH} }$ be the direct product of $\HH$ with itself, with the direct product norm.
From the Closed Graph Theorem, it suffices to show that: 

$G_T = \set {\tuple {x, T x} \in \HH \times \HH : x \in \HH}$
is closed in $\struct {\HH \times \HH, \norm \cdot_{\HH \times \HH} }$.
Let $\sequence {\tuple {x_n, T x_n} }_{n \mathop \in \N}$ be a sequence in $G_T$ converging to $\tuple {x, y}$ in $\struct {\HH \times \HH, \norm \cdot_{\HH \times \HH} }$.
From Convergence in Direct Product Norm, we have: 

$\sequence {x_n}_{n \mathop \in \N}$ converges to $x$ in $X$
and:

$\sequence {y_n}_{n \mathop \in \N}$ converges to $y$ in $Y$.
We show that $y = T x$.
Let $z \in \HH$. 
Then we have: 

$\innerprod {T x_n} z = \innerprod {x_n} {T z}$
Taking $n \to \infty$, we have: 

$\innerprod y z = \innerprod x {T z}$
from Inner Product is Continuous.
Since $T$ is Hermitian, we have: 

$\innerprod x {T z} = \innerprod {T x} z$
Then we have: 

$\innerprod y z = \innerprod {T x} z$ for all $z \in \HH$.
So from Inner Product is Sesquilinear, we have: 

$\innerprod {y - T x} z = 0$ for all $z \in \HH$.
In particular: 

$\innerprod {y - T x} {y - T x} = 0$
so: 

$y = T x$
So $G_T$ is closed in $\struct {\HH \times \HH, \norm \cdot_{\HH \times \HH} }$.
So, by the Closed Graph Theorem, $T$ is bounded.
$\blacksquare$





