# 

Source: https://proofwiki.org/wiki/Bounded_Sequence_in_Euclidean_Space_has_Convergent_Subsequence/Proof_3



Theorem
Let $\sequence {x_i}_{i \mathop \in \N}$ be a bounded sequence in the Euclidean space $\R^n$.
Then some subsequence of $\sequence {x_i}_{i \mathop \in \N}$ converges to a limit.


Proof
We have that all norms on $\R^n$ are equivalent.
Choose the Euclidean norm $\norm {\, \cdot \,}_2$.
Proof by induction will be used.


Basis for the induction
Let $n = 1$.
Then the proof is given by Bolzano-Weierstrass theorem.


Induction hypothesis
Suppose, a bounded sequence $\sequence {\boldsymbol x_i}_{i \mathop \in \N}$ in $\R^n$ has a convergent subsequence $\sequence {\boldsymbol x_{i_k}}_{k \mathop \in \N}$.
Then we have to show, that the same property holds for $\R^{n + 1}$.


Induction step
Let $\sequence {\mathbf x_n}_{n \mathop \in \N}$ be a bounded sequence in $\R^{n + 1}$.
Split $\mathbf x_n$ into its first $n$ components and the last one:

$\mathbf x_n := \tuple {\boldsymbol \alpha_n, \beta_n}$
where $\boldsymbol \alpha_n \in \R^n$ and $\beta_n \in \R$
Then:














\(\ds \norm {\boldsymbol \alpha_n}_2\)

\(\le\)







\(\ds \sqrt {\norm {\boldsymbol \alpha_n}_2^2 + \beta_n^2}\)




















\(\ds \)

\(=\)







\(\ds \norm {\mathbf x_n}_2\)





Definition of Euclidean Norm



Hence, $\sequence {\boldsymbol \alpha_n}_{n \mathop \in \N}$ is a bounded sequence in $\R^n$.
By induction hypothesis, it has a convergent subsequence $\sequence {\mathbf \alpha_{n_k} }_{k \mathop \in \N}$.
Denote its limit by $\alpha$.
Furthermore:














\(\ds \norm {\beta_n}_2\)

\(\le\)







\(\ds \sqrt {\norm {\boldsymbol \alpha_n}_2^2 + \beta_n^2}\)




















\(\ds \)

\(=\)







\(\ds \norm {\mathbf x_n}_2\)





Definition of Euclidean Norm



Therefore, $\sequence {\beta_n}_{n \mathop \in \N}$ is bounded.
By Bolzano-Weierstrass theorem, $\sequence {\beta_n}_{n \mathop \in \N}$ has a convergent subsequence  $\sequence {\beta_{n_k}}_{k \mathop \in \N}$.
Denote its limit by $\beta$.
Then we have that:














\(\ds \lim_{k \to \infty} \mathbf x_{n_k}\)

\(=\)







\(\ds \lim_{k \to \infty} \tuple {\boldsymbol \alpha_{n_k}, \beta_{n_k} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {\boldsymbol \alpha, \beta}\)

\(\ds \in \R^{n + 1}\)







Hence, the bounded sequence $\sequence {\mathbf x_n}_{n \mathop \in \N}$ has a convergent subsequence $\sequence {\mathbf x_{n_k}}_{k \mathop \in \N}$.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 1.5$: Normed and Banach spaces. Compact sets




