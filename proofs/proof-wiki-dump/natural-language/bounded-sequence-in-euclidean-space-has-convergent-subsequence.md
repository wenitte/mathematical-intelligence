# 

Source: https://proofwiki.org/wiki/Bounded_Sequence_in_Euclidean_Space_has_Convergent_Subsequence


It has been suggested that this page or section be merged into Bolzano-Weierstrass Theorem/General Form.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.


Theorem
Let $\sequence {x_i}_{i \mathop \in \N}$ be a bounded sequence in the Euclidean space $\R^n$.
Then some subsequence of $\sequence {x_i}_{i \mathop \in \N}$ converges to a limit.


Proof 1
Denote with $d$ the Euclidean metric on $\R^n$.
Because $\sequence {x_i}_{i \mathop \in \N}$ is bounded, we find $v \in \R^n$ and $\epsilon \in \R_{>0}$ such that:

$\forall i \in \N: \map d {v, x_i} < \epsilon$
Therefore, all $x_i$ are members of the closed $\epsilon$-ball $S = \map {B_\epsilon^-} v$.
By Closed Ball in Euclidean Space is Compact, $S$ is compact.
Thus $\sequence {x_i}_{i \mathop \in \N}$ can be considered as a sequence in the compact metric space $\struct {S, d \restriction_{S \times S} }$.

By Compact Subspace of Metric Space is Sequentially Compact in Itself, $\sequence {x_i}_{i \mathop \in \N}$ has a convergent subsequence in $S$.
In particular, since $S$ is a metric subspace of $\R^n$, it follows that $\sequence {x_i}_{i \mathop \in \N}$ has a convergent subsequence in $\R^n$ as well.
$\blacksquare$


Proof 2
Let the range of $\sequence {x_i}$ be $S$.
By Closure of Bounded Subset of Metric Space is Bounded $\map \cl S$ is bounded in $\R^n$.
By Topological Closure is Closed, $\map \cl S$ is closed in $\R^n$.
By the Heine-Borel Theorem, $S$ is compact.
The result follows from Compact Subspace of Metric Space is Sequentially Compact in Itself.
$\blacksquare$


Proof 3
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





