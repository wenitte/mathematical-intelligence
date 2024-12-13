# 

Source: https://proofwiki.org/wiki/Relationship_between_Limit_Inferior_and_Lower_Limit

Theorem
Let $\struct {S, \tau}$ be a topological space.
Let $f: S \to \R \cup \set {-\infty, \infty}$ be an extended real-valued function.
Let $\sequence {s_n}_{n \mathop \in \N}$ be a convergent sequence in $S$ such that $s_n \to \bar s$.

Then the lower limit of $f$ at $\bar s$ is bounded above by the limit inferior of $\sequence {\map f {s_n} }$:

$\ds \liminf_{s \mathop \to \bar s} \map f s \le \liminf_{n \mathop \to \infty} \map f {s_n}$


Proof
Let $\NN_{\bar s}$ denote the neighborhood filter of $\bar s$.
By definition of the lower limit, there exists a sequence of open neighborhoods $\sequence {V_k}_{k \mathop \in \N} \in \NN_{\bar s}$ such that:

$\ds \lim_{k \mathop \to \infty} \set {\inf_{s \mathop \in V_k} \map f s} = \liminf_{s \mathop \to \bar s} \map f s$
This implies that $\forall \epsilon > 0 \exists k_\epsilon \in \N$ such that:

$\ds \inf_{s \mathop \in V_{k_\epsilon} } \map f s \ge \liminf_{s \mathop \to \bar s} \map f s - \epsilon$
By our hypothesis $s_n \to \bar s$ and because $V_{k_\epsilon} \in N_{\bar s}$ there exists $\map N {k_\epsilon} \in \N$ such that:

$\ds \forall n \ge \map N {k_\epsilon}: s_n \in V_{k_\epsilon}$
Consequently:














\(\ds \inf_{s \mathop \in V_{k_\epsilon} } \map f s\)

\(\le\)







\(\ds \inf_{n \mathop \ge \map N {k_\epsilon} } \map f {s_n}\)





because $\set {s_n : n \ge \map N {k_\epsilon} } \subseteq V_{k_\epsilon}$














\(\ds \)

\(\le\)







\(\ds \sup_{N \mathop \in \N} \set {\inf_{n \mathop \ge N} \map f {s_n} }\)





Definition of Supremum














\(\ds \)

\(=\)







\(\ds \liminf_{n \mathop \to \infty} \map f {s_n}\)





Definition of Limit Inferior



Combining these estimates, it follows that for all $\epsilon > 0$:

$\ds \liminf_{s \mathop \to \bar s} \map f s \le \liminf_{n \mathop \to \infty} \map f {s_n} + \epsilon$
Hence the result.
$\blacksquare$





