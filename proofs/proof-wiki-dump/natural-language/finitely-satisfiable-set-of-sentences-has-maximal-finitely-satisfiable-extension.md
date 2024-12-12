# 

Source: https://proofwiki.org/wiki/Finitely_Satisfiable_Set_of_Sentences_has_Maximal_Finitely_Satisfiable_Extension



Theorem
Let $\LL$ be a language of predicate logic.
Let $\FF$ be a finitely satisfiable set of $\LL$-sentences.
Then there exists a finitely satisfiable set of $\LL$-sentences $\FF' \supseteq \FF$ such that:

For all $\LL$-sentences $\phi$, either $\phi \in \FF'$ or $\sqbrk {\neg \phi} \in \FF'$


Proof
Let $S$ be the set of all $\LL$-sentences.
For every finite subset $P \subseteq S$, define:

$M_P = \set {t \in \Bbb B^P : \exists \MM : \paren {\MM \models_{\mathrm {PL}} \FF \cap P} \land \paren {\forall \phi \in P : \map t \phi = T \iff \MM \models_{\mathrm {PL}} \phi}}$

Define:

$M = \bigcup_{P \mathop \in I} M_K$
where $I$ is the set of all finite subsets of $S$.
We want to show that $M$ is a binary mess over $S$.

For axiom $\text M 1$:

Let $P \in I$ be arbitrary.
As Intersection is Subset and Subset of Finite Set is Finite, $\FF \cap P$ is a finite subset of $\FF$.
As $\FF$ is finitely satisfiable, there is some $\LL$-structure $\MM_P$ such that $\MM_P \models_{\mathrm {PL}} \FF \cap P$.
Define $t_P : P \to \Bbb B$ as:
$\map {t_P} \phi = \begin{cases}
T & : \MM_P \models_{\mathrm {PL}} \phi \\
F & : \MM_P \not\models_{\mathrm {PL}} \phi
\end{cases}$

As it satisfies the rule, $t_P \in M_P \subseteq M$, proving axiom $\text M 1$.
For axiom $\text M 2$:

Let $P \in I$ and $t \in M$ be arbitrary.
By definition, $t \in M_Q$ for some $Q \in I$.
Thus, there is some $\LL$-structure $\MM_Q$ such that:
$\MM_Q \models_{\mathrm {PL}} \FF \cap Q$
$\map t \phi = T \iff \MM_Q \models_{\mathrm {PL}} \phi$ for all $\phi \in Q$
As $\FF \cap Q \cap P \subseteq \FF \cap Q$, it follows that $\MM_Q \models \FF \cap Q \cap P$
As $Q \cap P \subseteq Q$, it follows that $\map t \phi = T \iff \MM_Q \models_{\mathrm {PL}} \phi$ for all $\phi \in Q \cap P$
Thus, $t \restriction_P$ satisfies the criteria for $M_{Q \cap P}$, and $t \restriction_P \in M$, proving axiom $\text M 2$.
$\Box$

By the Consistency Principle for Binary Mess:

There exists a mapping $f : S \to \Bbb B$ that is consistent with $M$.
Define:

$\FF' = \set {\phi \in S : \map f \phi = T}$
We now need to verify that the following properties hold for $\FF'$:

$\FF' \supseteq \FF$.
$\FF'$ is finitely satisfiable.
$\forall \phi \in S: \phi \in \FF' \lor \sqbrk {\neg \phi} \in \FF'$.

Let $\phi \in \FF$ be arbitrary.
We need to show that $\map f \phi = T$.
By definition of consistent, $f\restriction_{\set \phi} \in M$.
Thus, there is an $\LL$-structure $\MM_{\set \phi}$ such that:

$\MM_{\set \phi} \models \set \phi$
$\map {f\restriction_{\set \phi}} \phi = T \iff \MM_{\set \phi} \models \set \phi$
It immediately follows that $\map {f\restriction_{\set \phi}} \phi = T$, and thus that $\map f \phi = T$.
$\Box$

Let $P \subseteq \FF'$ be an arbitrary finite subset.
By definition, for every $\phi \in P$, $\map f \phi = T$.
By definition of consistent, $f\restriction_P \in M$.
Thus, there is an $\LL$-structure $\MM_P$ such that:

$\forall \phi \in P: \map {f\restriction_P} \phi = T \iff \MM_P \models \phi$
It follows immediately that:

$\forall \phi \in P: \MM_P \models \phi$
As $P$ was arbitrary, $\FF'$ is finitely satisfiable by definition.
$\Box$

Aiming for a contradiction, suppose, suppose $\phi \notin \FF'$ and $\sqbrk {\neg \phi} \notin \FF'$, where $\phi \in S$.
Then, $\map f \phi = \map f {\neg \phi} = F$, by definition of $\FF'$.
By definition of consistent, we have that $f\restriction_{\set {\phi, \neg \phi}} \in M$.
Thus, there is an $\LL$-structure $\MM_{\set {\phi, \neg \phi}}$ such that:

$\map {f\restriction_{\set {\phi, \neg \phi}}} \phi = T \iff \MM_{\set {\phi, \neg \phi}} \models \phi$
$\map {f\restriction_{\set {\phi, \neg \phi}}} {\neg \phi} = T \iff \MM_{\set {\phi, \neg \phi}} \models \neg \phi$
It follows immediately that:

$\MM_{\set {\phi, \neg \phi}} \not\models \phi$
$\MM_{\set {\phi, \neg \phi}} \not\models \neg \phi$
By definition of $\mathrm{PL}$:

$\map {\operatorname{val}_{\MM_{\set {\phi, \neg \phi}}}} \phi = F$
$\map {\operatorname{val}_{\MM_{\set {\phi, \neg \phi}}}} {\neg \phi} = F$













\(\ds F\)

\(=\)







\(\ds \map {\operatorname{val}_{\MM_{\set {\phi, \neg \phi} } } } {\neg \phi}\)




















\(\ds \)

\(=\)







\(\ds \map {f^\neg} {\map {\operatorname{val}_{\MM_{\set {\phi, \neg \phi} } } } \phi}\)





Definition of Value of Formula under Assignment














\(\ds \)

\(=\)







\(\ds \map {f^\neg} F\)




















\(\ds \)

\(=\)







\(\ds T\)





Definition of Truth Function of Logical Not



As $F \ne T$, that is a contradiction.
Thus, at least one of $\phi$ and $\neg \phi$ is in $\FF'$
$\blacksquare$


Boolean Prime Ideal Theorem
This theorem depends on the Boolean Prime Ideal Theorem (BPI), by way of Consistency Principle for Binary Mess.
Although not as strong as the Axiom of Choice, the BPI is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.


Sources
1973: Thomas J. Jech: The Axiom of Choice: $2.3$ The Prime Ideal Theorem




