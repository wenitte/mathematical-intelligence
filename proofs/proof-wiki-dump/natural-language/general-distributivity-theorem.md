# 

Source: https://proofwiki.org/wiki/General_Distributivity_Theorem



Theorem
Let $\struct {R, \circ, *}$ be a ringoid.

Then for every pair of sequences $\sequence {a_i}_{1 \mathop \le i \mathop \le m}, \sequence {b_j}_{1 \mathop \le j \mathop \le n}$ of elements of $R$:

$\ds \paren {\sum_{i \mathop = 1}^m a_i} * \paren {\sum_{j \mathop = 1}^n b_j} = \sum_{\substack {1 \mathop \le i \mathop \le m \\ 1 \mathop \le j \mathop \le n} } \paren {a_i * b_j}$
where:

$\ds \sum_{i \mathop = 1}^m a_i$ is the summation $a_1 \circ a_2 \circ \cdots \circ a_m$
$m$ and $n$ are strictly positive integers: $m, n \in \Z_{> 0}$


Lemmata
The proof requires the following lemmata:

Lemma 1
Let $\struct {R, \circ, *}$ be a ringoid.
Then for every sequence $\sequence {a_k}_{1 \mathop \le k \mathop \le n}$ of elements of $R$, and for every $b \in R$:

$\ds \paren {\sum_{j \mathop = 1}^n a_j} * b = \sum_{j \mathop = 1}^n \paren {a_j * b}$


Lemma 2
Let $\struct {R, \circ, *}$ be a ringoid.
Then for every sequence $\sequence {a_k}_{1 \mathop \le k \mathop \le n}$ of elements of $R$, and for every $b \in R$:

$\ds b * \paren {\sum_{j \mathop = 1}^n a_j} = \sum_{j \mathop = 1}^n \paren {b * a_j}$


Proof
Proof by induction:

For all $n \in \Z_{> 0}$, let $\map P n$ be the proposition:

$\ds \forall m \in \Z_{> 0}: \paren {\sum_{i \mathop = 1}^m a_i} * \paren {\sum_{j \mathop = 1}^n b_j} = \sum_{\substack {1 \mathop \le i \mathop \le m \\ 1 \mathop \le j \mathop \le n} } \paren {a_i * b_j}$

We have that $\struct {R, \circ, *}$ is a ringoid, and so:

$\forall a, b, c \in S: \paren {a \circ b} * c = \paren {a * c} \circ \paren {b * c}$
$\forall a, b, c \in R: a * \paren {b \circ c} = \paren {a * b} \circ \paren {a * c}$


Basis for the Induction
$\map P 1$ is the case:

$\ds \forall m \in \Z_{>0}: \paren {\sum_{i \mathop = 1}^m a_i} * b_1 = \sum_{1 \mathop \le i \mathop \le m} \paren {a_i * b_1}$
This is demonstrated in Lemma 1.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\ds \forall m \in \Z_{> 0}: \paren {\sum_{i \mathop = 1}^m a_i} * \paren {\sum_{j \mathop = 1}^k b_j} = \sum_{\substack {1 \mathop \le i \mathop \le m \\ 1 \mathop \le j \mathop \le k} } \paren {a_i * b_j}$

Then we need to show:

$\ds \forall m \in \Z_{> 0}: \paren {\sum_{i \mathop = 1}^m a_i} * \paren {\sum_{j \mathop = 1}^{k + 1} b_j} = \sum_{\substack {1 \mathop \le i \mathop \le m \\ 1 \mathop \le j \mathop \le {k + 1} } } \paren {a_i * b_j}$


Induction Step
This is our induction step:














\(\ds \paren {\sum_{i \mathop = 1}^m a_i} * \paren {\sum_{j \mathop = 1}^{k + 1} b_j}\)

\(=\)







\(\ds \paren {\sum_{i \mathop = 1}^m a_i} * \paren {\paren {\sum_{j \mathop = 1}^k b_j} \circ b_{k + 1} }\)





Definition of Summation














\(\ds \)

\(=\)







\(\ds \paren {\paren {\sum_{i \mathop = 1}^m a_i} * \paren {\sum_{j \mathop = 1}^k b_j} } \circ \paren {\paren {\sum_{i \mathop = 1}^m a_i} * b_{k + 1} }\)





as $\struct {R, \circ, *}$ is a ringoid














\(\ds \)

\(=\)







\(\ds \paren {\paren {\sum_{i \mathop = 1}^m a_i} * \paren {\sum_{j \mathop = 1}^k b_j} } \circ \sum_{1 \mathop \le i \mathop \le m} \paren {a_i * b_{k + 1} }\)





Basis for the Induction














\(\ds \)

\(=\)







\(\ds \sum_{\substack {1 \mathop \le i \mathop \le m \\ 1 \mathop \le j \mathop \le k} } \paren {a_i * b_j} \circ \sum_{1 \mathop \le i \mathop \le m} \paren {a_i * b_{k + 1} }\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \sum_{\substack {1 \mathop \le i \mathop \le m \\ 1 \mathop \le j \mathop \le {k + 1} } } \paren {a_i * b_j}\)





Associativity of $\circ$ in $\struct {R, \circ, *}$




So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \forall m, n \in \Z_{> 0}: \paren {\sum_{i \mathop = 1}^m a_i} * \paren {\sum_{j \mathop = 1}^n b_j} = \sum_{\substack {1 \mathop \le i \mathop \le m \\ 1 \mathop \le j \mathop \le n} } \paren {a_i * b_j}$
$\blacksquare$

The same result can be obtained by fixing $n$ and using induction on $m$, which requires Lemma 2 to be used for its base case.


Examples
Sum of $j$ from $m$ to $n$ by Sum of $k$ from $r$ to $s$
$\ds \sum_{j \mathop = m}^n \sum_{k \mathop = r}^s j k = \frac 1 4 \paren {n \paren {n + 1} - \paren {m - 1} m} \paren {s \paren {s + 1} - \paren {r - 1} r}$
for $m \le n, r \le s$.


Warning
When using the General Distributivity Theorem, be careful not to conflate the indices.
The following is not a valid argument:














\(\ds \left({\sum_{i \mathop = 1}^n a_i}\right) \left({\sum_{j \mathop = 1}^n \frac 1 {a_j} }\right)\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \sum_{j \mathop = 1}^n \frac {a_i} {a_j}\)





General Distributivity Theorem














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \sum_{i \mathop = 1}^n \frac {a_i} {a_i}\)





Change of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n 1\)





simplification














\(\ds \)

\(=\)







\(\ds n\)











Also see
Multiple of Ring Product
Product Rule for Sequences for the infinite case in the context of the standard number fields


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.1$: The integers
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.1$: The integers: Exercise $2$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products: $(4)$




