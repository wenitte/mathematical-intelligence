# 

Source: https://proofwiki.org/wiki/Convergent_Sequences_form_Invariant_Subspace_of_Bounded_Sequences_wrt_Ces%C3%A0ro_Summation_Operator



Theorem
Let $\ell^\infty$ be the space of bounded sequences.
Let $c$ be the space of convergent sequences.
Let $A : \ell^\infty \to \ell^\infty$ be the Cesàro summation operator.

Then $c$ is an invariant subspace of $\ell^\infty$ with respect to $A$.


Proof
Let $\sequence {x_n}_{n \mathop \in \N} \in c$ be a sequence.
By definition, $\sequence {x_n}_{n \mathop \in \N}$ converges.
Let $\ds L = \lim_{n \mathop \to \infty} x_n$ be the limit of $\sequence {x_n}_{n \mathop \in \N}$.
Then:

$\forall \epsilon \in \R_{> 0} : \exists N_1 \in \N : \forall n \in \N : n > N_1 \implies \size {x_n - L} < \epsilon$
Furthermore:

$\exists M \in \R_{> 0} : \forall n \in \N : \size {x_n} < M$
$A \mathbf x$ converges to $L$













\(\ds \size{\frac 1 n \paren {\sum_{i \mathop = 1}^{n} x_i} - L}\)

\(=\)







\(\ds \frac 1 n \size{\sum_{i \mathop = 1}^{N_1} x_i + \sum_{j \mathop = N_1 + 1}^n x_i - n L}\)




















\(\ds \)

\(\le\)







\(\ds \frac 1 n \paren{\sum_{i \mathop = 1}^{N_1} \size {x_i - L} + \sum_{j \mathop = N_1 + 1}^n \size {x_j - L} }\)





Triangle Inequality for Real Numbers














\(\ds \)

\(<\)







\(\ds \frac 1 n \sum_{i \mathop = 1}^{N_1} \paren {\size {x_i} + \size L} + \frac {n - N_1} n \epsilon\)





Triangle Inequality for Real Numbers














\(\ds \)

\(\le\)







\(\ds \frac {N_1} n \paren{M + \size L} + \paren {1 - \frac {N_1} n} \epsilon\)









Let $\epsilon' \in \R_{> 0 }$.
Let $n \in \N$ be such that:

$\ds \frac {N_1} n \paren{M + \size L} + \paren {1 - \frac {N_1} n} \epsilon < \epsilon'$
Suppose $n > N_1$.
Then:














\(\ds \frac {N_1} n \paren{M + \size L} + \paren {1 - \frac {N_1} n} \epsilon\)

\(<\)







\(\ds \frac {N_1} n \paren{M + \size L} + \epsilon\)




















\(\ds \)

\(<\)







\(\ds \epsilon'\)









Suppose also that $\ds n > N_1 \frac {M + \size L}{\epsilon' - \epsilon}$.
Then:














\(\ds \frac {N_1} n \paren{M + \size L} + \paren {1 - \frac {N_1} n} \epsilon\)

\(<\)







\(\ds \frac {N_1} n \paren{M + \size L} + \epsilon\)




















\(\ds \)

\(<\)







\(\ds \paren{\epsilon' - \epsilon} + \epsilon\)




















\(\ds \)

\(=\)







\(\ds \epsilon'\)









Altogether, $n$ has to satisfy $n > \tilde N$ where:

$\ds \tilde N = \max \set {N_1, N_1 \frac {M + \size L}{\epsilon' - \epsilon} }$.
$\epsilon'$ was arbitrary.
Hence:

$\ds \forall \epsilon' \in \R{>0} : \exists \tilde N : \forall n \in \N : n > \tilde N \implies \size {A \mathbf x - L} < \epsilon'$
Therefore, $A \mathbf x \in c$.
$\Box$
Thus, $A c \subseteq c$.
By definition, $c$ is an invariant subspace of $\ell^\infty$ with respect to $A$.
$\blacksquare$

Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.3$: The normed space $\map {CL} {X,Y}$. Operator norm and the normed space $\map {CL} {X, Y}$




