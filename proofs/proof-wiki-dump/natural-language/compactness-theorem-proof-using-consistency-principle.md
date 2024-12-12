# 

Source: https://proofwiki.org/wiki/Compactness_Theorem/Proof_using_Consistency_Principle

Theorem
Let $\LL$ be the language of predicate logic.
Let $T$ be a set of $\LL$-sentences.

Then $T$ is satisfiable if and only if $T$ is finitely satisfiable.


Proof
By definition, $T$ is finitely satisfiable means that every finite subset of $T$ is satisfiable.
Because the direction:

$T$ satisfiable implies $T$ finitely satisfiable
is trivial, the proof below justifies the converse:

$T$ finitely satisfiable implies $T$ satisfiable.

By Extend Theory to Satisfy Witness Property, there exist a language $\LL^*$ and a set of $\LL^*$-sentences $T^*$ satisfying:

$T^*$ is finitely satisfiable
If $T^*$ is satisfiable, then $T$ is satisfiable
For every $\LL^*$-WFF of $1$ free variable $\map \phi x$, there exists some constant $c_\phi$ such that:
$T^* \models \paren {\exists x: \map \phi x} \implies \map \phi {x := c_\phi}$
Thus, it suffices to show that $T^*$ is satisfiable.

By Finitely Satisfiable Set of Sentences has Maximal Finitely Satisfiable Extension, there exists a set of $\LL^*$-sentences $T' \supseteq T^*$ such that:

For all $\LL^*$-sentences $\phi$, either $\phi \in T'$ or $\sqbrk {\neg \phi} \in T'$
As $T^* \subseteq T'$, it follows that the third property above continues to hold for $T'$.
Thus, by the lemma to Extend Theory to Satisfy Witness Property:

$T'$ satisfies the witness property
Additionally, any $\mathrm{PL}$-structure that models $T'$ will also model $T^*$.
But, by Maximal Finitely Satisfiable Theory with Witness Property is Satisfiable, there is such a $\mathrm{PL}$-structure.
$\blacksquare$


Boolean Prime Ideal Theorem
This theorem depends on the Boolean Prime Ideal Theorem (BPI), by way of Finitely Satisfiable Set of Sentences has Maximal Finitely Satisfiable Extension.
Although not as strong as the Axiom of Choice, the BPI is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.





