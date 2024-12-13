# 

Source: https://proofwiki.org/wiki/Nagata-Smirnov_Metrization_Theorem/Sufficient_Condition


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $T = \struct {S, \tau}$ be a regular topological space.

Let $T$ have a basis that is $\sigma$-locally finite

Then:

$T$ is metrizable


Proof
Let $\BB = \ds \bigcup_{n \mathop \in \N} \BB_n$ be a $\sigma$-locally finite basis where $\BB_n$ is locally finite set of subsets for each $n \in \N$.

From T3 Space with Sigma-Locally Finite Basis is Perfectly T4 Space:

$T$ is a perfectly $T_4$ space

Let $I = \set{\tuple{B, n} : B \in \BB, B \in \BB_n}$.
By definition of perfectly $T_4$ space:

$\forall \tuple{B, n} \in I : \exists$ continuous $f_{\tuple{B, n}} : S \to \closedint 0 1 : B = \set{x \in S : \map {f_{\tuple{B, n}}} x \ne 0}$

Let $\alpha$ be the cardinality of $I$.
Let $H^\alpha$ be the generalized Hilbert sequence space of weight $\alpha$.
That is, $H^\alpha = \struct {A, d_2}$ where:

$A$ is the set of all real-valued functions $x : I \to \R$ such that:
$(1)\quad \set{i \in I: x_i \ne 0}$ is countable
$(2)\quad$ the generalized sum $\ds \sum_{i \mathop \in I} x_i^2$ is a convergent net.
and

$d_2: A \times A \to \R$ is the real-valued function defined as:
$\ds \forall x = \family {x_i}, y = \family {y_i} \in A: \map {d_2} {x, y} := \paren {\sum_{i \mathop \in I} \paren {x_i- y_i}^2}^{\frac 1 2}$
We have $H^\alpha$ is a metric space from Generalized Hilbert Sequence Space is Metric Space.


Lemma $1$
$\forall x \in S$ and $n \in \N$:
the generalized sum $\ds \sum_{B \mathop \in \BB_n} \map {f_{\tuple {B, n} }^2} x$ converges
$\Box$

Let $g_n : S \to \closedint 0 1$ be the mapping defined by:

$\map {g_n} x$ is the limit of the generalized sum $\ds \sum_{B \in \BB_n} \map {f_{\tuple{B, n}}^2} x$

From Lemma 1:

$\forall n \in \N : g_n : S \to \closedint 0 1$ is well-defined

For all $n \in \N$, let:

$I_n = \set{\tuple{B, k} \in I : k \ge n}$
By definition of $I$ and $I_0$:

$I = I_0$


Lemma $2$
for all $n \in \N$ and $x \in S$:
the generalized sum $\ds \sum_{\tuple{B, k} \mathop \in I_n} \sqbrk{\dfrac 1 {\paren{\sqrt 2}^k} \dfrac {\map {f_{\tuple{B, k}}} x} {\sqrt {1 + \map {g_k} x}}}^2$ converges
and:

$\ds \sum_{\tuple{B, k} \mathop \in I_n} \sqbrk{\dfrac 1 {\paren{\sqrt 2}^k} \dfrac {\map {f_{\tuple{B, k}}} x} {\sqrt {1 + \map {g_k} x}}}^2 \le \sum_{m \mathop = n}^\infty \dfrac 1 {2^k}$
$\Box$

From Lemma $2$:

$\forall x \in S : \ds \family{\dfrac 1 {\paren{\sqrt 2}^n} \dfrac {\map {f_{\tuple{B, n}}} x} {\sqrt {1 + \map {g_n} x}}}_{\tuple{B, n} \in I} \in H^\alpha$

For each $\tuple{B, n} \in I$, let:

$F_{\tuple{B, n}} : S \to \R$ be the mapping defined by:
$\forall x \in S : \map {F_{\tuple{B, n}}} x = \dfrac 1 {\paren{\sqrt 2}^n} \dfrac {\map {f_{\tuple{B, n}}} x} {\sqrt {1 + \map {g_n} x}}$

From Multiple Rule for Continuous Mapping to Normed Division Ring:

$\forall \tuple{B, n} \in I : F_{\tuple{B, n}}$ is continuous

Let $F : S \to H^\alpha$ be the mapping defined by:










\(\ds \forall x \in S: \, \)



\(\ds \map F x\)

\(=\)







\(\ds \family{\map {F_{\tuple{B, n} } } x}_{\tuple{B, n} \in I}\)




















\(\ds \)

\(=\)







\(\ds \family{\dfrac 1 {\paren{\sqrt 2}^n} \dfrac {\map {f_{\tuple{B, n} } } x} {\sqrt {1 + \map {g_n} x} } }_{\tuple{B, n} \in I}\)










Let $X$ be $\map F S$ with the subspace metric from the generalized Hilbert sequence space $H^\alpha$:

$d_2: \map F S \times \map F S: \to \R$ be the real-valued function defined as:
$\ds \forall x = \family {x_i}, y = \family {y_i} \in \map F S: \map {d_2} {x, y} := \paren {\sum_{i \mathop \in I} \paren {x_i- y_i}^2}^{\frac 1 2}$

From Subspace of Metric Space is Metric Space:

$X$ is a metric space

Let $G : T \to X$ be the mapping defined by:










\(\ds \forall x \in S: \, \)



\(\ds \map G x\)

\(=\)







\(\ds \map F x\)




















\(\ds \)

\(=\)







\(\ds \family{\map {F_{\tuple{B, n} } } x}_{\tuple{B, n} \in I}\)









It follows that $G$ is a surjection.


$G$ is an Injection
We show that $G$ is an injection.

Let $x, y \in S : x \ne y$.
From Characterization of T1 Space using Basis:

$\exists n \in \N, B \in \BB_n : x \in B, y \notin B$
Hence:

$\map {f_{\tuple{B, n}}} x \ne 0, \map {f_{\tuple{B, n}}} y = 0$
It follows that:

$\map {F_{\tuple{B, n}}} x \ne 0, \map {F_{\tuple{B, n}}} y = 0$
So:

$\map {F_{\tuple{B, n}}} x \ne \map {F_{\tuple{B, n}}} y$
Hence:

$\map G x \ne \map G y$
It follows that $G$ is an injection.
$\Box$


$G$ is a continuous mapping
We show that $G$ is everywhere continuous.

Let $x \in S$.
Let $\epsilon \in \R_{\mathop > 0}$.

From Sum of Infinite Geometric Sequence:

$\ds \sum_{n \mathop = 0}^\infty \dfrac 1 {2^n}$ is convergent
From Tail of Convergent Series tends to Zero:

$(1) \quad \exists N \in \N : \ds \sum_{n \mathop = N}^\infty \dfrac 1 {2^n} < \dfrac {\epsilon^2} 4$

By definition of locally finite set of subsets:

$\forall n < N : \exists U_n \in \tau : x \in U_n : \set{B \in \BB_n : B \cap U_n \ne \O}$ is finite
From Set Intersection Preserves Subsets:

$\forall n < N : \forall B \in \BB_n : B \cap \set x \subseteq B \cap U_n$
From Subset of Empty Set iff Empty:

$\forall n < N : \set{B \in \BB_n : x \in B} \subseteq \set{B \in \BB_n : B \cap U_n \ne \O}$
From Subset of Finite Set is Finite:

$\forall n < N : \set{B \in \BB_n : x \in B}$ is finite
From Union of Finite Sets is Finite:

$\set{B \in \ds \bigcup_{n \mathop < N} \BB_n : x \in B}$ is finite

Let:

$\set{B_1, B_2, \ldots, B_m} = \set{B \in \ds \bigcup_{n \mathop < N} \BB_n : x \in B}$
Furthermore:

$\forall B \in \ds \bigcup_{n \mathop < N} \BB_n \setminus \set{B_1, B_2, \ldots, B_m} : x \notin B$

Let $E = \set{\tuple{B_1, n_1}, \tuple{B_2, n_2}, \ldots, \tuple{B_m, n_m}}$ where for each $k \in \closedint 1 m$:

$n_k < N$
$B_k \in \BB_{n_k}$

By definition of continuity:

$\forall k \in \closedint 1 m : \exists V_k \in \tau : x \in V_k \subseteq U_{n_k}$:
$\forall y \in V_k : \size{\map {F_{\tuple{B_{n_k}, n_k}}} x - \map {F_{\tuple{B_{n_k}, n_k}}} y } < \dfrac \epsilon {\sqrt {2 m}}$
Let $V = \ds \bigcap_{k = 1}^m V_k$.
We have:

$x \in V$
and

$(2) \quad \forall y \in V : \forall k \in \closedint 1 m : \size{\map {F_{\tuple{B_{n_k}, n_k}}} x - \map {F_{\tuple{B_{n_k}, n_k}}} y } < \dfrac \epsilon {\sqrt {2 m}}$

Let:

$I_{N - 1} = \set{\tuple{B, n} \in I : n < N}$
Hence $E$ is a finite subset of $I_{N - 1}$

Let:

$y \in V$
Then:

$\forall \tuple{B, n} \in I_{N - 1} \setminus E : \map {F_{\tuple{B, n} } } x = \map {F_{\tuple{B, n_k} } } y  = 0$
Hence:

$\forall \tuple{B, n} \in I_{N - 1} \setminus E : \paren{\map {F_{\tuple{B, n} } } x - \map {F_{\tuple{B, n} } } y }^2 = 0$

We have:














\(\ds \map {d_2} {\map G x, \map G y}^2\)

\(=\)







\(\ds \sum_{\tuple{B, n} \mathop \in I} \paren{\map {F_{\tuple{B, n} } } x - \map {F_{\tuple{B, n_k} } } y }^2\)




















\(\ds \)

\(=\)







\(\ds \sum_{\tuple{B, n} \mathop \in I \setminus I_N } \paren{\map {F_{\tuple{B, n} } } x - \map {F_{\tuple{B, n} } } y }^2\)




















\(\ds \)

\(\)







\(\ds \quad + \sum_{\tuple{B, n} \mathop \in I_N} \paren{\map {F_{\tuple{B, n} } } x - \map {F_{\tuple{B, n} } } y }^2\)





Absolutely Convergent Generalized Sum over Union of Disjoint Index Sets














\(\ds \)

\(=\)







\(\ds \sum_{\tuple{B, n} \mathop \in E } \paren{\map {F_{\tuple{B, n} } } x - \map {F_{\tuple{B, n} } } y }^2\)





Generalized Sum Restricted to Non-zero Summands














\(\ds \)

\(\)







\(\ds \quad + \sum_{\tuple{B, n} \mathop \in I_N} \paren{\map {F_{\tuple{B, n} } } x - \map {F_{\tuple{B, n} } } y }^2\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^m \paren{\map {F_{\tuple{B_k, n_k} } } x - \map {F_{\tuple{B_k, n_n} } } y }^2\)





Definition of Summation over Finite Index














\(\ds \)

\(\)







\(\ds \quad + \sum_{\tuple{B, n} \mathop \in I_N} \paren{\map {F_{\tuple{B, n} } } x - \map {F_{\tuple{B, n} } } y }^2\)




















\(\ds \)

\(<\)







\(\ds \sum_{k \mathop = 1}^m \dfrac {\epsilon^2} {2 m} + \sum_{\tuple{B, n} \mathop \in I_N} \paren{\map {F_{\tuple{B, n} } } x - \map {F_{\tuple{B, n} } } y }^2\)





from $(2)$














\(\ds \)

\(=\)







\(\ds m \dfrac {\epsilon^2} {2 m} + \sum_{\tuple{B, n} \mathop \in I_N} \paren{\map {F_{\tuple{B, n} } } x - \map {F_{\tuple{B, n} } } y }^2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\epsilon^2} 2 + \sum_{\tuple{B, n} \mathop \in I_N} \paren{\map {F_{\tuple{B, n} } } x - \map {F_{\tuple{B, n} } } y }^2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\epsilon^2} 2 + \sum_{\tuple{B, n} \mathop \in I_N} \paren{\map {F_{\tuple{B, n} } } x}^2 - 2 \map {F_{\tuple{B, n} } } x \map {F_{\tuple{B, n} } } y + \paren{\map {F_{\tuple{B, n} } } y }^2\)





Square of Difference














\(\ds \)

\(\le\)







\(\ds \dfrac {\epsilon^2} 2 + \sum_{\tuple{B, n} \mathop \in I_N} \paren{\map {F_{\tuple{B, n} } } x}^2 + \paren{\map {F_{\tuple{B, n} } } y }^2\)





Inequality Rule for Absolutely Convergent Generalized Sums














\(\ds \)

\(=\)







\(\ds \dfrac {\epsilon^2} 2 + \sum_{\tuple{B, n} \mathop \in I_N } \paren{\map {F_{\tuple{B, n} } } x}^2 + \sum_{\tuple{B, n} \mathop \in I_N } \paren{\map {F_{\tuple{B, n} } } y }^2\)





Sum Rule for Convergent Nets














\(\ds \)

\(\le\)







\(\ds \dfrac {\epsilon^2} 2 + \sum_{n \mathop = N}^\infty \dfrac 1 {2^k} + \sum_{n \mathop = N}^\infty \dfrac 1 {2^k}\)





Lemma 2














\(\ds \)

\(<\)







\(\ds \dfrac {\epsilon^2} 2 + \dfrac {\epsilon^2} 4 + \dfrac {\epsilon^2} 4\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \epsilon^2\)














\(\ds \leadsto \ \ \)





\(\ds \map {d_2} {\map G x, \map G y}\)

\(<\)







\(\ds \epsilon\)










Since $y$ was arbitrary, it follows that:

$\forall y \in V : \map {d_2} {\map G x, \map G y} < \epsilon$
Since $\epsilon$ was arbitrary, it follows that:

$\forall \epsilon \in \R_{ > 0} : \exists V \in \tau : x \in V : \forall y \in V : \map {d_2} {\map G x, \map G y} < \epsilon$
It follows that $G$ is continuous at $x$.

Since $x$ was arbitrary, it follows that:

$G$ is everywhere continuous
$\Box$


$G$ is a closed mapping
We show that $G$ is a closed mapping.

Let $Z \subseteq S$ be a closed set.

Let $\map G x \notin G \sqbrk Z$.
By definition of image of set under mapping:

$x \notin Z$
By definition of regular space:

$\exists U, V \in \tau : x \in U, Z \subseteq V : U \cap V = \O$
By definition of basis:

$\exists m \in \N : \exists C \in \BB_m : x \in C : C \subseteq U$
From Subsets of Disjoint Sets are Disjoint:

$C \cap Z = \O$

By definition of $f_{\tuple{C, m}}$:

$\map {f_{\tuple{C, m}}} x \ne 0$ and $f_{\tuple{C, m}} \sqbrk Z = \set{0}$
Hence:

$\map {F_{\tuple{C, m}}} x \ne 0$ and $F_{\tuple{C, m}} \sqbrk Z = \set{0}$

We have:










\(\ds \forall \map G z \in G \sqbrk Z: \, \)



\(\ds \paren{\map {d_2} {\map G x, \map G z} }^2\)

\(=\)







\(\ds \paren{\map {d_2} {\map F x, \map F z} }^2\)





definition of $G$














\(\ds \)

\(=\)







\(\ds \sum_{\tuple{B, n} \in I} \paren{\map {F_\tuple{B, n} } x - \map {F_\tuple{B, n} } z}^2\)





definition of $d_2$














\(\ds \)

\(\ge\)







\(\ds \paren{\map {F_\tuple{C, m} } x - \map {F_\tuple{C, m} } z}^2\)





Absolutely Convergent Generalized Sum Converges to Supremum














\(\ds \)

\(=\)







\(\ds \paren{\map {F_\tuple{C, m} } x}^2\)





as $F_{\tuple{C, m} } \sqbrk Z = \set{0}$








\(\ds \leadsto \ \ \)

\(\ds \forall \map G z \in G \sqbrk Z: \, \)



\(\ds \map {d_2} {\map G x, \map G z}\)

\(\ge\)







\(\ds \map {F_\tuple{C, m} } x\)





Power Function is Strictly Increasing on Positive Elements




Hence:














\(\ds \map {d_2} {\map G x, G \sqbrk Z}\)

\(=\)







\(\ds \inf \set{\map {d_2} {\map G x, \map G z} : \map G z \in G \sqbrk Z}\)





Definition of Distance between Element and Subset of Metric Space














\(\ds \)

\(\ge\)







\(\ds \map {F_\tuple{C, m} } x\)





Definition of Infimum














\(\ds \)

\(>\)







\(\ds 0\)





as $\map {F_{\tuple{C, m} } } x \ne 0$




From Subset of Metric Space is Closed iff contains all Zero Distance Points:

$G \sqbrk C$ is closed in $X$

Since $C$ was arbitrary, it follows:

for all closed $C \subseteq S : G \sqbrk C$ is closed in $X$
It follows that $G$ is a closed mapping by definition.
$\Box$

By definition of homeomorphism:

$T$ is homeomorphic to the metric subspace $X$ of $H^\alpha$

It follows that $T$ is metrizable by definition.
$\blacksquare$





