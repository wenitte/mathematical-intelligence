# 

Source: https://proofwiki.org/wiki/Characteristic_Function_of_Union/Variant_2

Theorem
Let $A, B \subseteq S$.
Let $\chi_{A \mathop \cup B}$ be the characteristic function of their union $A \cup B$.

Then:

$\chi_{A \mathop \cup B} = \chi_A + \chi_B - \chi_{A \mathop \cap B}$


Proof
From Subset of Union:

$A, B \subseteq A \cup B$
From Intersection is Subset of Union:

$A \cap B \subseteq A \cup B$
Thus from Characteristic Function of Subset:

$\map {\chi_{A \mathop \cup B} } s = 0 \implies \map {\chi_A} s = \map {\chi_B} s = \map {\chi_{A \mathop \cap B} } s = 0$

Now suppose that $\map {\chi_A} s + \map {\chi_B} s - \map {\chi_{A \mathop \cap B} } s = 0$.
That is:

$\map {\chi_A} s + \map {\chi_B} s = \map {\chi_{A \mathop \cap B} } s$

Suppose the latter equals $1$, that is $s \in A \cap B$.
Then both $s \in A$ and $s \in B$, so by definition of characteristic function:

$\map {\chi_A} s + \map {\chi_B} s = 1 + 1 = 2$
Since $2 \ne 1$, it follows that $\map {\chi_{A \mathop \cap B} } s \ne 1$, that is it equals $0$.
Thence, it follows that:

$\map {\chi_A} s + \map {\chi_B} s = 0$.
This only happens when $\map {\chi_A} s = \map {\chi_B} s = 0$.

Thus, $s \notin A$ and $s \notin B$, so $s \notin A \cup B$.
It finally follows that $\map {\chi_{A \mathop \cup B} } s = 0$.

It is now established that:

$\map {\chi_{A \mathop \cup B} } s = 0 \iff \map {\chi_A} s + \map {\chi_B} s - \map {\chi_{A \mathop \cap B} } s = 0$
and from Characteristic Function Determined by 0-Fiber, the result follows.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 6$: Functions: Exercise $7 \ \text{(b)}$
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 2$: Problem $5 \ \text{(iv)}$




