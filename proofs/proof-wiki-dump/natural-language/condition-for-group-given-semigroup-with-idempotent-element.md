# 

Source: https://proofwiki.org/wiki/Condition_for_Group_given_Semigroup_with_Idempotent_Element

Theorem
Let $\struct {S, \circ}$ be a semigroup.
Let there exist an idempotent element $e$ of $S$ such that for all $a \in S$:

there exists at least one element $x$ of $S$ satisfying $x \circ a = e$
there exists at most one element $y$ of $S$ satisfying $a \circ y = e$.

Then $\struct {S, \circ}$ is a group.


Proof
Let $a$ be arbitrary.
We have:










\(\ds \exists x \in S: \, \)



\(\ds x \circ a\)

\(=\)







\(\ds e\)














\(\ds \leadsto \ \ \)





\(\ds \paren {x \circ a} \circ \paren {x \circ a}\)

\(=\)







\(\ds e \circ e\)




















\(\ds \)

\(=\)







\(\ds e\)





by hypothesis: $e$ is idempotent








\(\ds \leadsto \ \ \)





\(\ds x \circ \paren {a \circ x \circ a}\)

\(=\)







\(\ds e\)





Semigroup Axiom $\text S 1$: Associativity








\(\ds \leadsto \ \ \)





\(\ds a \circ x \circ a\)

\(=\)







\(\ds a\)





both $a \circ x \circ a$ and $a$ are $y \in S$ such that $x \circ y = e$








\(\ds \leadsto \ \ \)





\(\ds a \circ e\)

\(=\)







\(\ds a\)





as $x \circ a = e$



So $e$ is a right identity.

Again, let $a$ be arbitrary.
Let $x \in S$ be such that $x \circ a = e$.
We have:














\(\ds e\)

\(=\)







\(\ds x \circ a\)




















\(\ds \)

\(=\)







\(\ds \paren {x \circ e} \circ a\)





Definition of Right Identity














\(\ds \)

\(=\)







\(\ds x \circ \paren {e \circ a}\)





Semigroup Axiom $\text S 1$: Associativity








\(\ds \leadsto \ \ \)





\(\ds e \circ a\)

\(=\)







\(\ds a\)





both $e \circ a$ and $a$ are $y \in S$ such that $x \circ y = e$



So $e$ is a left identity.

We note the meaning of the criterion:

there exists at least one element $x$ of $S$ satisfying $x \circ a = e$
As we now know that $e$ is a left identity, the above means that $x$ is a left inverse for $a$ in $S$.

To summarise, we have an algebraic structure $\struct {S, \circ}$:

$(1): \quad$ which is closed, from Semigroup Axiom $\text S 0$: Closure
$(2): \quad$ which is associative, from Semigroup Axiom $\text S 1$: Associativity
$(3): \quad$ which has a left identity
$(4): \quad$ for which every element has a left inverse.
That is, $\struct {S, \circ}$ fulfils all the left group axioms.
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups: Exercise $7.15$
Arturo Magidin (https://math.stackexchange.com/users/742/arturo-magidin), Conditions for Group given Semigroup with Idempotent Element, URL (version: 2022-03-02): https://math.stackexchange.com/q/4394150




