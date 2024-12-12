# 

Source: https://proofwiki.org/wiki/Cantor-Bernstein-Schr%C3%B6der_Theorem/Proof_3



Theorem
Let $S$ and $T$ be sets, such that:

$\exists f: S \to T$ such that $f$ is an injection
$\exists g: T \to S$ such that $g$ is an injection.
Then there exists a bijection from $S$ to $T$.


Proof
Let $S, T$ be sets.
Let $\powerset S, \powerset T$ denote their power sets.
Let $f: S \to T$ and $g: T \to S$ be injections that we know to exist between $S$ and $T$.

Consider the relative complements of elements of $\powerset S$ and $\powerset T$ as mappings:

$\complement_S: \powerset S \to \powerset S: \forall X \in \powerset S: \relcomp S X = S \setminus X$
$\complement_T: \powerset T \to \powerset T: \forall Y \in \powerset T: \relcomp T Y = T \setminus Y$
which follow directly from the definition of relative complement.
Let $\alpha$ and $\beta$ denote the direct image mappings of $f$ and $g$, respectively.

Consider the mapping $z: \powerset S \to \powerset S$ defined by the composition:

$z = \complement_S \circ \beta \circ \complement_T \circ \alpha$


$z$ is an increasing mapping
Let $A, B \in \powerset S$ with $A \subseteq B$.
We have:














\(\ds \map \alpha A\)

\(\subseteq\)







\(\ds \map \alpha B\)





Image of Subset under Mapping is Subset of Image








\(\ds \leadsto \ \ \)





\(\ds \map {\paren {\complement_T \circ \alpha} } A\)

\(\supseteq\)







\(\ds \map {\paren {\complement_T \circ \alpha} } B\)





Set Complement inverts Subsets








\(\ds \leadsto \ \ \)





\(\ds \map {\paren {\beta \circ \complement_T \circ \alpha} } A\)

\(\supseteq\)







\(\ds \map {\paren {\beta \circ \complement_T \circ \alpha} } B\)





Image of Subset under Mapping is Subset of Image








\(\ds \leadsto \ \ \)





\(\ds \map {\paren {\complement_S \circ \beta \circ \complement_T \circ \alpha} } A\)

\(\subseteq\)







\(\ds \map {\paren {\complement_S \circ \beta \circ \complement_T \circ \alpha} } B\)





Set Complement inverts Subsets








\(\ds \leadsto \ \ \)





\(\ds \map z A\)

\(\subseteq\)







\(\ds \map z B\)





Definition of $z$



$\Box$
By the Knaster-Tarski Lemma: Power Set, there is a $\mathbb G \in \powerset S$ such that:

$\map z {\mathbb G} = \mathbb G$

From Relative Complement of Relative Complement we have that $\complement_S \circ \complement_S$ is the identity mapping on $\powerset S$.
Thus we obtain:














\(\ds \relcomp S {\mathbb G}\)

\(=\)







\(\ds \map {\paren {\complement_S \circ z} } {\mathbb G}\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {\complement_S \circ \complement_S \circ \beta \circ \complement_T \circ \alpha} } {\mathbb G}\)





Definition of $z$














\(\ds \)

\(=\)







\(\ds g \sqbrk {\map {\paren {\complement_T \circ \alpha} } {\mathbb G} }\)





as $\complement_S \circ \complement_S = I_{\powerset S}$




At this stage, a diagram can be helpful:



Let $h: S \to T$ be the mapping defined as:

$\forall x \in S: \map h x = \begin {cases}
\map f x & : x \in \mathbb G \\
\map {g^{-1} } x & : x \in \relcomp S {\mathbb G}
\end {cases}$
From the above, we have that:

$\relcomp S {\mathbb G} \subseteq g \sqbrk T$
Therefore, as $g$ is an injection, it follows that the preimage $\map {g^{-1} } x$ is a singleton.
So $h$ is a bijection by dint of the injective nature of both $f$ and $g^{-1}$.
$\blacksquare$


Source of Name
This entry was named for Georg Cantor, Felix Bernstein and Friedrich Wilhelm Karl Ernst Schröder.


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 8$: Theorem $8.2$




