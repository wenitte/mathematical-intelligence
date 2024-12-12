# 

Source: https://proofwiki.org/wiki/Conditions_for_Ordering_in_Ordered_Group_to_be_Directed



Theorem
Let $\struct {G, \odot, \preccurlyeq}$ be an ordered group whose identity element is $e$.

Then:

$\preccurlyeq$ is a directed ordering
if and only if

for every $x \in G$ there exist $y, z \in G$ such that $e \preccurlyeq y$, $e \preccurlyeq z$ and $x = y \odot z^{-1}$.


Proof
Sufficient Condition
Let $\preccurlyeq$ be a directed ordering.
By definition of directed ordering:

$\forall x, z \in G: \exists y \in G: x \preccurlyeq y$ and $z \preccurlyeq y$

Let $x \in G$ be arbitrary.










\(\ds \exists y \in G: \, \)



\(\ds x\)

\(\preccurlyeq\)







\(\ds y\)





Definition of Directed Ordering












\(\, \ds \land \, \)

\(\ds e\)

\(\preccurlyeq\)







\(\ds y\)





as it holds for all $z$, it definitely holds for $e$








\(\ds \leadsto \ \ \)





\(\ds x \odot y^{-1}\)

\(\preccurlyeq\)







\(\ds y \odot y^{-1}\)





Definition of Relation Compatible with Operation












\(\, \ds \land \, \)

\(\ds e\)

\(\preccurlyeq\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds x \odot y^{-1} \odot z\)

\(\preccurlyeq\)







\(\ds e \odot z\)


















\(\, \ds \land \, \)

\(\ds e\)

\(\preccurlyeq\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds \paren {y \odot x^{-1} }^{-1} \odot z\)

\(\preccurlyeq\)







\(\ds z\)





Inverse of Group Product












\(\, \ds \land \, \)

\(\ds e\)

\(\preccurlyeq\)







\(\ds y\)









Let $e = \paren {y \odot x^{-1}  }^{-1} \odot z$.
Then:














\(\ds z\)

\(=\)







\(\ds y \odot x^{-1}\)














\(\ds \leadsto \ \ \)





\(\ds x \odot z\)

\(=\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds y \odot z^{-1}\)









Then from:














\(\ds \paren {y \odot x^{-1} }^{-1} \odot z\)

\(\preccurlyeq\)







\(\ds z\)


















\(\, \ds \land \, \)

\(\ds e\)

\(\preccurlyeq\)







\(\ds y\)









we get:














\(\ds e\)

\(\preccurlyeq\)







\(\ds z\)





Group Axiom $\text G 3$: Existence of Inverse Element












\(\, \ds \land \, \)

\(\ds e\)

\(\preccurlyeq\)







\(\ds y\)









and we see that:

$\exists y, z \in G: e \preccurlyeq y, e \preccurlyeq z, x = y \odot z^{-1}$
$\blacksquare$


Necessary Condition
Let $\preccurlyeq$ be such that:

for every $x \in G$ there exist $y, z \in G$ such that $e \preccurlyeq y$, $e \preccurlyeq z$ and $x = y \odot z^{-1}$.

Let $x \in G$ be arbitrary.
By the hypothesis, there exist $z, w \in G$ such that $e \preccurlyeq z$, $e \preccurlyeq w$ and $x = z \odot w^{-1}$.
We have:














\(\ds e\)

\(\preccurlyeq\)







\(\ds w\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds w^{-1}\)

\(\preccurlyeq\)







\(\ds e\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds z \odot w^{-1}\)




















\(\ds \)

\(\preccurlyeq\)







\(\ds z \odot e\)





Definition of Relation Compatible with Operation














\(\ds \)

\(=\)







\(\ds z\)









Similarly, for another arbitrary $y \in G$, there exists some $g \in G$ such that $e \preccurlyeq g$ and $y \preccurlyeq g$.
Then we have:














\(\ds x\)

\(=\)







\(\ds x \odot e\)





Definition of Identity Element














\(\ds \)

\(\preccurlyeq\)







\(\ds z \odot e\)





Definition of Relation Compatible with Operation














\(\ds \)

\(\preccurlyeq\)







\(\ds z \odot g\)





Definition of Relation Compatible with Operation














\(\ds y\)

\(=\)







\(\ds e \odot y\)





Definition of Identity Element














\(\ds \)

\(\preccurlyeq\)







\(\ds z \odot y\)





Definition of Relation Compatible with Operation














\(\ds \)

\(\preccurlyeq\)







\(\ds z \odot g\)





Definition of Relation Compatible with Operation



This shows that $z \odot g$ is an upper bound of $\set {x, y}$.
By Group Axiom $\text G 0$: Closure, $z \odot g \in G$.
Hence $\preccurlyeq$ is a directed ordering.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 15$: Ordered Semigroups: Exercise $15.13$




