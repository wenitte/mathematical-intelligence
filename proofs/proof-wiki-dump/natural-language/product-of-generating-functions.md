# 

Source: https://proofwiki.org/wiki/Product_of_Generating_Functions



Theorem
Let $\map G z$ be the generating function for the sequence $\sequence {a_n}$.
Let $\map H z$ be the generating function for the sequence $\sequence {b_n}$.

Then $\map G z \map H z$ is the generating function for the sequence $\sequence {c_n}$, where:

$\forall n \in \Z_{\ge 0}: c_n = \ds \sum_{k \mathop = 0}^n a_k b_{n - k}$


General Rule
Let $\map {G_0} z, \map {G_1} z, \map {G_2} z, \ldots$ be any number of generating functions (up to countably infinite) for the sequences $\sequence {a_0 n}, \sequence {a_1 n}, \sequence {a_2 n}, \ldots$
Then:














\(\ds \prod_{j \mathop \ge 0} \map {G_j} z\)

\(=\)







\(\ds \prod_{j \mathop \ge 0} \sum_{k \mathop \ge 0} a_{j k} z^k\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \ge 0} z^n \sum_{\substack {k_0, k_1, k_2, \ldots \mathop \ge 0 \\ k_0 \mathop + k_1 \mathop + \mathop \cdots \mathop = n} } \paren {\prod_{j \mathop \ge 0} a_{j k} }\)











Proof
By definition of generating function:

$\map G z = \ds \sum_{n \mathop \ge 0} a_n z^n$
$\map H z = \ds \sum_{n \mathop \ge 0} b_n z^n$

Then:
$\quad \begin {array}{c|ccccc}
\times & b_0 & b_1 z & b_2 z^2 & b_3 z^3 & \cdots \\
\hline
a_0 & a_0 b_0 & a_0 b_1 z & a_0 b_2 z^2 & a_0 b_3 z^3 & \cdots \\
a_1 z & a_1 b_0 z & a_1 b_1 z^2 & a_1 b_2 z^3 & a_1 b_3 z^4 & \cdots \\
a_2 z^2 & a_2 b_0 z^2 & a_2 b_1 z^3 & a_2 b_2 z^4 & a_2 b_3 z^5 & \cdots \\
a_3 z^3 & a_3 b_0 z^3 & a_3 b_1 z^4 & a_3 b_2 z^5 & a_3 b_3 z^6 & \cdots \\
\vdots & \vdots & \vdots & \vdots & \vdots & \ddots 
\end {array}$
The result follows by definition of generating function.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.9$: Generating Functions: $(6)$




