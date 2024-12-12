# 

Source: https://proofwiki.org/wiki/Cauchy_Sequences_form_Ring_with_Unity



Theorem
Let $\struct {R, +, \circ, \norm {\, \cdot \,} }$ be a normed division ring.
Let $\struct {R^\N, +, \circ}$ be the ring of sequences over $R$ with unity $\tuple {1, 1, 1, \dotsc}$.
Let $\CC \subset R^\N$ be the set of Cauchy sequences on $R$.

Then:

$\struct {\CC, +, \circ}$ is a subring of $R^\N$ with unity $\tuple {1, 1, 1, \dotsc}$.


Corollary
Let $\struct {F, +, \circ, \norm {\, \cdot \,} }$ be a valued field.
Let $\struct {F^\N, +, \circ}$ be the commutative ring of sequences over $F$ with unity $\tuple {1, 1, 1, \dotsc}$.
Let $\CC \subset F^\N$ be the set of Cauchy sequences on $F$.

Then:

$\struct {\CC, +, \circ}$ is a commutative subring of $F^\N$ with unity $\tuple {1, 1, 1, \dotsc}$.


Proof
The Subring Test used to prove the result.

By Constant Rule for Cauchy sequences:

the constant sequence $\tuple {1, 1, 1, \dotsc}$ is a Cauchy sequences.
Hence:

$\CC \neq \O$

Let $\sequence {x_n}, \sequence {y_n} \in \CC$.

By definition of pointwise addition:

$\sequence {x_n} + \paren {-\sequence {y_n}} = \sequence {x_n - y_n}$.
By Difference Rule for Normed Division Ring Sequences:

$\sequence {x_n - y_n}$ is a Cauchy sequence.
Hence:

$\sequence {x_n} + \paren {- \sequence {y_n}} \in CC$.

By definition of pointwise product:

$\sequence {x_n} \circ \sequence {y_n} = \sequence {x_n \circ y_n}$.
By Product Rule for Normed Division Ring Sequences:

the sequence $\sequence {x_n \circ y_n}$ is a Cauchy sequence.
Hence:

$\sequence {x_n} \circ \sequence {y_n} \in \CC$.

By the Subring Test the result follows.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 3.2$: Completions: Proposition $3.2.5$
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.3$ Construction of the completion of a normed field




