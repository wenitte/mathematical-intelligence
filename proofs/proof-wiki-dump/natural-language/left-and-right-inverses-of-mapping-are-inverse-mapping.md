# 

Source: https://proofwiki.org/wiki/Left_and_Right_Inverses_of_Mapping_are_Inverse_Mapping



Theorem
Let $f: S \to T$ be a mapping such that:

$(1): \quad \exists g_1: T \to S: g_1 \circ f = I_S$
$(2): \quad \exists g_2: T \to S: f \circ g_2 = I_T$
Then:

$g_1 = g_2 = f^{-1}$
where $f^{-1}$ is the inverse of $f$.


Proof 1













\(\ds g_2\)

\(=\)







\(\ds I_S \circ g_2\)





Definition of Identity Mapping














\(\ds \)

\(=\)







\(\ds \paren {g_1 \circ f} \circ g_2\)





by hypothesis














\(\ds \)

\(=\)







\(\ds g_1 \circ \paren {f \circ g_2}\)





Composition of Mappings is Associative














\(\ds \)

\(=\)







\(\ds g_1 \circ I_T\)





by hypothesis














\(\ds \)

\(=\)







\(\ds g_1\)





Definition of Identity Mapping




From Left and Right Inverse Mappings Implies Bijection it follows that $f$ is a bijection.
It follows from Composite of Bijection with Inverse is Identity Mapping that $g_1 = g_2 = f^{-1}$.
$\blacksquare$


Proof 2
From Left and Right Inverse Mappings Implies Bijection, we have that $f$ is a bijection.
Let $y \in T$ and let $x = \map {f^{-1} } y$.
Such an $x$ exists because $f$ is surjective, and unique within $S$ as $f$ is injective.

Then $y = \map f x$ and so:














\(\ds \map {f^{-1} } y\)

\(=\)







\(\ds x\)




















\(\ds \)

\(=\)







\(\ds \map {I_S} x\)





$I_S$ is the identity mapping on $S$














\(\ds \)

\(=\)







\(\ds \map {g_1 \circ f} x\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \map {g_1} y\)





from above: $y = \map f x$



So $f^{-1} = g_1$.

Also:














\(\ds \map f x\)

\(=\)







\(\ds y\)




















\(\ds \)

\(=\)







\(\ds \map {I_T} y\)





$I_T$ is the identity mapping on $T$














\(\ds \)

\(=\)







\(\ds \map {f \circ g_2} y\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds \map {f^{-1} } y\)

\(=\)







\(\ds x\)





as $f$ is injective














\(\ds \)

\(=\)







\(\ds \map {g_2} y\)









So $f^{-1} = g_2$.
$\blacksquare$


Proof 3
Because Composition of Mappings is Associative, brackets do not need to be used.




\(\text {(1)}: \quad\)









\(\ds g_1 \circ f\)

\(=\)







\(\ds I_S\)














\(\ds \leadsto \ \ \)





\(\ds g_1 \circ f \circ g_2\)

\(=\)







\(\ds I_S \circ g_2\)




















\(\ds \)

\(=\)







\(\ds g_2\)





Definition of Identity Mapping








\(\text {(2)}: \quad\)









\(\ds f \circ g_2\)

\(=\)







\(\ds I_T\)














\(\ds \leadsto \ \ \)





\(\ds g_1 \circ f \circ g_2\)

\(=\)







\(\ds g_1 \circ I_T\)




















\(\ds \)

\(=\)







\(\ds g_1\)





Definition of Identity Mapping



Thus $g_1 = g_2$.

Now suppose there exists $g_3: T \to S: g_3 \circ f = I_S$.
By the same argument as above, $g_3 = g_2$.
This means that $g_1 (= g_3)$ is the only left inverse of $f$.

Similarly, suppose there exists $g_4: T \to S: f \circ g_4 = I_T$.
By the same argument as above, $g_4 = g_1$.
This means that $g_2 (= g_4)$ is the only right inverse of $f$.

So $g_1 = g_2 = g_3 = g_4$ are all the same.
By Composite of Bijection with Inverse is Identity Mapping, it follows that this unique mapping is the inverse $f^{-1}$.
$\blacksquare$





