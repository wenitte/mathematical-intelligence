# 

Source: https://proofwiki.org/wiki/Characteristic_Function_Determined_by_1-Fiber



Theorem
Let $A \subseteq S$.
Let $f:S \to \left\{{0, 1}\right\}$ be a mapping.
Denote by $\chi_A$ the characteristic function on $A$.

Then the following are equivalent:

$(1):\quad f = \chi_A$
$(2):\quad \forall s \in S: f \left({s}\right) = 1 \iff s \in A$
Using the notion of a fiber, $(2)$ may also be expressed as:

$(2'):\quad f^{-1} \left({1}\right) = A$


Proof
$(1)$ implies $(2)$
Follows directly from the definition of characteristic function.
$\Box$


$(2)$ implies $(1)$
Let $s \in S$.

Suppose that $s \in A$.
Then by assumption, $f \left({s}\right) = 1$.
Also, by definition of characteristic function, $\chi_A \left({s}\right) = 1$.

Next, suppose that $s \notin A$.
Then $f \left({s}\right) \ne 1$ by assumption.
As $f \left({s}\right) \in \left\{{0, 1}\right\}$, it follows that $f \left({s}\right) = 0$.
Again, by definition of characteristic function, also have $\chi_A \left({s}\right) = 0$.

Hence, for all $s \in S$, have $f \left({s}\right) = \chi_A \left({s}\right)$.
By Equality of Mappings, it follows that $f = \chi_A$.
$\blacksquare$





