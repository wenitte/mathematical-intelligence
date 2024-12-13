# 

Source: https://proofwiki.org/wiki/Relative_Complement_Mapping_on_Powerset_is_Bijection/Proof_2

Theorem
Let $S$ be a set.
Let $\complement_S: \powerset S \to \powerset S$ denote the relative complement mapping on the power set of $S$.

Then $\complement_S$ is a bijection.
Thus each $T \subseteq S$ is in one-to-one correspondence with its relative complement.


Proof
Let $f: \powerset S \to \powerset S$ be a mapping defined as:

$\forall T \in \powerset S: \map f T = \relcomp S T$
It is to be demonstrated that $f$ is a bijection.

By definition of relative complement:

$\relcomp S T = S \setminus T = \set {x \in S: x \notin T}$
and so it can be seen that $f$ is well-defined.

Let $T_1, T_2 \in \powerset S: \map f {T_1} = \map f {T_2}$.
Then:














\(\ds \map f {T_1}\)

\(=\)







\(\ds \map f {T_2}\)














\(\ds \leadsto \ \ \)





\(\ds \relcomp S {T_1}\)

\(=\)







\(\ds \relcomp S {T_2}\)





by definition of $f$








\(\ds \leadsto \ \ \)





\(\ds \relcomp S {\relcomp S {T_1} }\)

\(=\)







\(\ds \relcomp S {\relcomp S {T_2} }\)














\(\ds \leadsto \ \ \)





\(\ds T_1\)

\(=\)







\(\ds T_2\)





Relative Complement of Relative Complement



That is, $f$ is an injection.

Also:














\(\ds T\)

\(\in\)







\(\ds \powerset S\)














\(\ds \leadsto \ \ \)

\(\ds \exists X \in \powerset S: \, \)



\(\ds X\)

\(=\)







\(\ds \relcomp S T\)














\(\ds \leadsto \ \ \)





\(\ds \relcomp S X\)

\(=\)







\(\ds \relcomp S {\relcomp S T}\)














\(\ds \leadsto \ \ \)





\(\ds \relcomp S X\)

\(=\)







\(\ds T\)





Relative Complement of Relative Complement



That is, for all $T \in \powerset S$ there exists an $X$ such that $T = \map f X$.
This demonstrates that $f$ is a surjection.

The result follows by definition of bijection.
$\blacksquare$





