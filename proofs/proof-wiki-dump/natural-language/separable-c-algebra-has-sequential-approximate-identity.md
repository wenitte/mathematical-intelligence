# 

Source: https://proofwiki.org/wiki/Separable_C*-Algebra_has_Sequential_Approximate_Identity

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a separable $\text C^\ast$ algebra.
Then there exists a sequence $\family {e_n}_{n \mathop \in \N}$ forming an approximate identity of $A$.


Proof
Let $\set {a_n : n \in \N}$ be a countable everywhere dense subset of $A$.
From Existence of Approximate Identity of C*-Algebra arising from Dense Ideal, there exists a directed set $\struct {\Lambda, \preceq}$ and net $\family {e_\lambda}_{\lambda \mathop \in \Lambda}$ forming an approximate identity of $A$.
The issue is that, at this point, $\Lambda$ may not be countable.
Hence we desire to extract an $\tuple {\le, \preceq}$-increasing sequence $\sequence {\lambda_n}_{n \mathop \in \N}$ in $\Lambda$ such that $\family {e_{\lambda_n} }_{n \mathop \in \N}$ forms an approximate identity of $A$.
Take $n \in \N$. 
For $1 \le j \le n$, we have that $\family {a_j e_\lambda}_{\lambda \mathop \in \Lambda}$ converges to $a_j$.
Hence for each $j$ we can find $\mu_{j, n} \in \Lambda$ such that:

$\norm {a_j - a_j e_\lambda} < 2^{-n}$ for each $\lambda \succeq \mu_{j, n}$.
Hence $\Lambda$ is directed, there exists $\lambda_n \in \Lambda$ such that:

$\lambda_n \succeq \mu_{j, n}$ for each $1 \le j \le n$.
Then:

$\norm {a_j - a_j e_\lambda} < 2^{-n}$ for each $\lambda \succeq \lambda_n$.
By construction, for $i \le j$ we have $\lambda_i \preceq \lambda_j$ and hence $e_{\lambda_i} \le_A e_{\lambda_j}$ where $\le_A$ is the canonical preordering.
Hence from Approximate Identity for Everywhere Dense Subset is Approximate Identity of C*-Algebra, it will suffice to show that:

$\sequence {a_k e_{\lambda_n} }_{n \mathop \in \N}$ converges to $a_k$ for each $k \in \N$.
Now suppose that $\epsilon > 0$ and $k \in \N$. 
Take $N > k$ such that $2^{-N} < \epsilon$.
Then for $n \ge N$ we have $\lambda_n \succeq \lambda_N$ and hence:

$\norm {a_k - a_k e_{\lambda_n} } < 2^{-N} < \epsilon$
Hence the sequence $\sequence {a_k e_{\lambda_n} }_{n \in \N}$ converges to $a_k$ for each $k \in \N$.
Hence by Approximate Identity for Everywhere Dense Subset is Approximate Identity of C*-Algebra, $\sequence {e_{\lambda_n} }_{n \in \N}$ is an approximate identity of $A$.
$\blacksquare$


Sources
2000: John B. Conway: A Course in Operator Theory ... (previous) ... (next): Corollary $4.4$




