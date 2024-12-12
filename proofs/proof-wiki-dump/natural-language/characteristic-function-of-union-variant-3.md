# 

Source: https://proofwiki.org/wiki/Characteristic_Function_of_Union/Variant_3

Theorem
Let $A, B \subseteq S$.
Let $\chi_{A \mathop \cup B}$ be the characteristic function of their union $A \cup B$.

Then:

$\chi_{A \mathop \cup B} = \max \set {\chi_A, \chi_B}$
where $\max$ denotes the max operation.


Proof
Suppose $\map {\chi_{A \mathop \cup B} } s = 0$.
Then $s \notin A \cup B$, so $s \notin A$ and $s \notin B$.
Hence:

$\map {\chi_A} s = \map {\chi_B} s = 0$
and by definition of max operation:

$\max \set {\map {\chi_A} s, \map {\chi_B} s} = 0$

Conversely, suppose:

$\max \set {\map {\chi_A} s, \map {\chi_B} s} = 0$
Then it follows that:

$\map {\chi_A} s = \map {\chi_B} s = 0$
because characteristic functions are $0$ or $1$.
Hence $s \notin A$ and $s \notin B$, so $s \notin A \cup B$.
That is:

$\map {\chi_{A \mathop \cup B} } s = 0$

Above considerations give:

$\map {\chi_{A \mathop \cup B} } s = 0 \iff \max \set {\map {\chi_A} s, \map {\chi_B} s} = 0$
and applying Characteristic Function Determined by 0-Fiber, the result follows.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 2$: Problem $5 \ \text{(v)}$




