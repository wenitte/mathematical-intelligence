# 

Source: https://proofwiki.org/wiki/Character_on_Non-Unital_Banach_Algebra_induces_Character_on_Unitization

Theorem
Let $\struct {A, \norm {\, \cdot \,} }$ be a Banach algebra over $\C$ that is not unital.
Let $\struct {A_+, \norm {\, \cdot \,}_{A_+} }$ be the normed unitization of $\struct {A, \norm {\, \cdot \,} }$.
Let $\phi$ be a character on $A$.
Define: 

$\map {\phi_+} {\tuple {x, \lambda} } = \map \phi x + \lambda$
for each $\tuple {x, \lambda} \in A_+$. 

Then $\phi_+$ is a character on $A_+$.


Proof
Let $\tuple {x, \lambda}, \tuple {y, \mu} \in A_+$ and $t \in \C$.
We have: 














\(\ds \map {\phi_+} {\tuple {x, \lambda} + t \tuple {y, \mu} }\)

\(=\)







\(\ds \map {\phi_+} {\tuple {x + t y, \lambda + t \mu} }\)




















\(\ds \)

\(=\)







\(\ds \map \phi {x + t y} + \lambda + t \mu\)




















\(\ds \)

\(=\)







\(\ds \paren {\map \phi x + \lambda} + t \paren {\map \phi y + \mu}\)





Definition of Linear Functional














\(\ds \)

\(=\)







\(\ds \map {\phi_+} {\tuple {x, \lambda} } + t \map {\phi_+} {\tuple {y, \mu} }\)









and so $\phi_+$ is linear.
To show that $\phi_+$ is a character, it remains to show that:

$\map {\phi_+} {\tuple {x, \lambda} \tuple {y, \mu} } = \map {\phi_+} {\tuple {x, \lambda} } \map {\phi_+} {\tuple {y, \lambda} }$
We have:














\(\ds \map {\phi_+} {\tuple {x, \lambda} \tuple {y, \mu} }\)

\(=\)







\(\ds \map {\phi_+} {\tuple {x y + \lambda y + \mu x, \lambda \mu} }\)





Definition of Unitization of Algebra over Field














\(\ds \)

\(=\)







\(\ds \map \phi {x y + \lambda y + \mu x} + \lambda \mu\)




















\(\ds \)

\(=\)







\(\ds \map \phi x \map \phi y + \lambda \map \phi y + \mu \map \phi x + \lambda \mu\)





Definition of Character (Banach Algebra)














\(\ds \)

\(=\)







\(\ds \paren {\map \phi x + \lambda} \paren {\map \phi y + \mu}\)




















\(\ds \)

\(=\)







\(\ds \map {\phi_+} {\tuple {x, \lambda} } \map {\phi_+} {\tuple {y, \mu} }\)









So $\phi_+$ is a character.
$\blacksquare$





