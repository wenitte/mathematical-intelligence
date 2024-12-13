# 

Source: https://proofwiki.org/wiki/Mapping_reflects_Preordering



Theorem
Let $S$ and $T$ be sets.
Let $f: S \to T$ be a mapping.
Let ${\precsim} \subseteq T \times T$ be a preordering on $T$.

Let $\RR$ be the relation defined on $S$ by the rule:

$x \mathrel \RR y \iff \map f x \precsim \map f y$
Then $\RR$ is a preordering on $S$.


Proof
Reflexivity













\(\ds x\)

\(\in\)







\(\ds S\)














\(\ds \leadsto \ \ \)





\(\ds \map f x\)

\(\in\)







\(\ds T\)





Definition of $f$








\(\ds \leadsto \ \ \)





\(\ds \map f x\)

\(\precsim\)







\(\ds \map f x\)





as $\precsim$ is a preordering on $T$








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\RR\)







\(\ds x\)





Definition of $\RR$



Thus $\RR$ is reflexive.
$\Box$


Transitivity













\(\ds x\)

\(\RR\)







\(\ds y\)


















\(\, \ds \land \, \)

\(\ds y\)

\(\RR\)







\(\ds z\)














\(\ds \leadsto \ \ \)





\(\ds \map f x\)

\(\precsim\)







\(\ds \map f y\)


















\(\, \ds \land \, \)

\(\ds \map f y\)

\(\precsim\)







\(\ds \map f z\)





Definition of $\RR$








\(\ds \leadsto \ \ \)





\(\ds \map f x\)

\(\precsim\)







\(\ds \map f z\)





as $\precsim$ is a preordering on $T$








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\RR\)







\(\ds z\)





Definition of $\RR$



Thus $\RR$ is transitive.
$\Box$

So, by definition, $\RR$ is a preordering.
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: Further exercises: $6$




