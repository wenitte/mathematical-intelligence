# 

Source: https://proofwiki.org/wiki/Relative_Complement_of_Relative_Complement/Proof_1

Theorem
$\relcomp S {\relcomp S T} = T$


Proof
By the definition of relative complement:

$\relcomp S {\relcomp S T} = S \setminus \paren {S \setminus T}$
Let $t \in T$.
Then by the definition of set difference:

$t \notin S \setminus T$
Since $t \in T$ and $T \subseteq S$, by the definition of subset:

$t \in S$
Thus:

$t \in \paren {S \setminus \paren {S \setminus T} }$

Suppose instead that:

$t \in \paren {S \setminus \paren {S \setminus T} }$
Then:

$t \in S$
and:

$\neg \paren {t \in \paren {S \setminus T} }$
Thus:

$\neg \paren {\paren {t \in S} \land \neg \paren {t \in T} }$
By Conditional is Equivalent to Negation of Conjunction with Negative:

$t \in S \implies t \in T$
By Modus Ponendo Ponens:

$t \in T$
$\blacksquare$


Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle, by way of Conditional is Equivalent to Negation of Conjunction with Negative/Formulation 1/Reverse Implication.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.





