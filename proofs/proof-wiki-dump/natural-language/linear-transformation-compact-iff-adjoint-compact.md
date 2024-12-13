# 

Source: https://proofwiki.org/wiki/Linear_Transformation_Compact_iff_Adjoint_Compact

Theorem
Let $H, K$ be Hilbert spaces.
Let $T: H \to K$ be a linear transformation.

Then $T$ is compact if and only if its adjoint $T^*$ is.


Proof
First suppose that $T$ is compact.
From the construction of the adjoint, $T^\ast$ is bounded.
From Right Composition of Compact Linear Transformation with Bounded Linear Transformation is Compact, $T T^\ast$ is compact.
Let $\sequence {x_n}_{n \mathop \in \N}$ be a bounded sequence in $K$.
Then there exists a convergent subsequence of $\sequence {T T^\ast x_n}_{n \mathop \in \N}$, say $\sequence {T T^\ast x_{n_j} }_{j \mathop \in \N}$. 
We show that $\sequence {T^\ast x_{n_j} }_{j \mathop \in \N}$ converges.
Pick $M > 0$ such that: 

$\norm {x_n}_K \le M$
for each $n \in \N$. 
We have: 














\(\ds \norm {\map {T^\ast} {x_{n_j} - x_{n_k} } }^2_H\)

\(=\)







\(\ds \innerprod {\map {T^\ast} {x_{n_j} - x_{n_k} } } {\map {T^\ast} {x_{n_j} - x_{n_k} } }_H\)





Definition of Inner Product Norm














\(\ds \)

\(=\)







\(\ds \innerprod {\map {T T^\ast} {x_{n_j} - x_{n_k} } } {x_{n_j} - x_{n_k} }_K\)





Definition of Adjoint Linear Transformation














\(\ds \)

\(\le\)







\(\ds \norm {\map {T T^\ast} {x_{n_j} - x_{n_k} } } \norm {x_{n_j} - x_{n_k} }_K\)





Cauchy-Bunyakovsky-Schwarz Inequality for Inner Product Spaces














\(\ds \)

\(\le\)







\(\ds 2 M \norm {\map {T T^\ast} {x_{n_j} - x_{n_k} } }_K\)





Norm Axiom $\text N 3$: Triangle Inequality



Since $\sequence {\map {T T^\ast} {x_{n_j} } }_{j \mathop \in \N}$ is convergent, it is Cauchy from Convergent Sequence is Cauchy Sequence. 
Let $\epsilon > 0$. 
Pick $N \in \N$ so that: 

$\ds \norm {\map {T T^\ast} {x_{n_j} - x_{n_k} } }_K < \frac {\epsilon^2} {2 M}$
for $n, m \ge N$. 
Then for $n, m \ge N$ we have: 

$\norm {\map {T^\ast} {x_{n_j} - x_{n_k} } }_K^2 < \epsilon^2$
so:

$\norm {\map {T^\ast} {x_{n_j} - x_{n_k} } }_K < \epsilon$
So $\sequence {T^\ast x_{n_j} }_{j \mathop \in \N}$ is Cauchy.
Since $H$ is Hilbert, $\sequence {T^\ast x_{n_j} }_{j \mathop \in \N}$ is convergent.
So for each bounded sequence $\sequence {x_n}_{n \mathop \in \N}$ in $K$, $\sequence {T^\ast x_n}_{n \mathop \in \N}$ has a convergent subsequence. 
So $T^\ast$ is compact.
So for a bounded linear transformation $T : H \to K$, if $T$ is compact then $T^\ast$ is compact.
So for a bounded linear transformation $T : H \to K$, if $T^\ast$ is compact then $T^{\ast \ast}$ is compact.
From Adjoint is Involutive, we therefore have that that if $T^\ast$ is compact then $T$ is compact.
So $T$ is compact if and only if its adjoint $T^*$ is.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next) $II.4.4$
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $15.3$: Compact Linear Operators




