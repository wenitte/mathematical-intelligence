# 

Source: https://proofwiki.org/wiki/Characteristic_Function_Determined_by_0-Fiber



Theorem
Let $A \subseteq S$.
Let $f: S \to \set {0, 1}$ be a mapping.
Denote by $\chi_A$ the characteristic function on $A$.

Then the following are equivalent:

$(1): \quad f = \chi_A$
$(2): \quad \forall s \in S: \map f s = 0 \iff s \notin A$
Using the notion of a fiber, $(2)$ may also be expressed as:

$(2'):\quad \map {f^{-1} } 0 = S \setminus A$


Proof
$(1)$ implies $(2)$
Follows directly from the definition of characteristic function.
$\Box$


$(2)$ implies $(1)$
Let $s \in S$.

Suppose that $s \notin A$.
Then by assumption, $\map f s = 0$.
Also, by definition of characteristic function, $\map {\chi_A} s = 0$.

Next, suppose that $s \in A$.
Then $\map f s \ne 0$ by assumption.
As $\map f s \in \set {0, 1}$, it follows that $\map f s = 1$.
Again, by definition of characteristic function, also have $\map {\chi_A} s = 1$.

Hence, for all $s \in S$, have $\map f s = \map {\chi_A} s$.
By Equality of Mappings, it follows that $f = \chi_A$.
$\blacksquare$





