# 

Source: https://proofwiki.org/wiki/Inverse_Image_Mapping_of_Bijection_is_Inverse_of_Direct_Image_Mapping


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $S$ and $T$ be sets.
Let $f :S \to T$ be a bijection.
Let $f^\to$ be the direct image mapping of $f$.
Let $f^\gets$ be the inverse image mapping of $f$.

Then:

$\paren {f^\to}^{-1} = f^\gets$
where $\paren {f^\to}^{-1}$ denotes the inverse of $f^\to$.


Proof
From Mapping is Bijection iff Direct Image Mapping is Bijection:

$f^\to$ is a bijection
Let $\paren {f^\to}^{-1}$ denote the inverse of $f^\to$.

We have:














\(\ds f^\gets \circ f^\to\)

\(=\)







\(\ds \operatorname{id}_{\powerset S} \circ \paren{f^\gets \circ f^\to}\)





Identity Mapping is Left Identity














\(\ds \)

\(=\)







\(\ds \paren{\paren {f^\to}^{-1} \circ f^\to} \circ \paren{f^\gets \circ f^\to}\)





Definition of Inverse Mapping














\(\ds \)

\(=\)







\(\ds \paren {f^\to}^{-1} \circ \paren{f^\to \circ \paren{f^\gets \circ f^\to} }\)





Composition of Mappings is Associative














\(\ds \)

\(=\)







\(\ds \paren {f^\to}^{-1} \circ f^\to\)





Direct Image of Inverse Image of Direct Image equals Direct Image Mapping














\(\ds \)

\(=\)







\(\ds \operatorname{id}_{\powerset S}\)





Definition of Inverse Mapping




Similarly, we have:














\(\ds f^\to \circ f^\gets\)

\(=\)







\(\ds \paren{f^\gets \circ f^\to} \circ \operatorname{id}_{\powerset T}\)





Identity Mapping is Right Identity














\(\ds \)

\(=\)







\(\ds \paren{f^\gets \circ f^\to} \circ \paren{f^\to \circ \paren {f^\to}^{-1} }\)





Definition of Inverse Mapping














\(\ds \)

\(=\)







\(\ds \paren{\paren{f^\to \circ f^\gets} \circ f^\to} \circ \paren {f^\to}^{-1}\)





Composition of Mappings is Associative














\(\ds \)

\(=\)







\(\ds f^\to \circ \paren {f^\to}^{-1}\)





Direct Image of Inverse Image of Direct Image equals Direct Image Mapping














\(\ds \)

\(=\)







\(\ds \operatorname{id}_{\powerset T}\)





Definition of Inverse Mapping




It follows that $f^\gets$ is the inverse of $f^\to$ by definition.
From Inverse Mapping is Unique:

$\paren {f^\to}^{-1} = f^\gets$
$\blacksquare$





