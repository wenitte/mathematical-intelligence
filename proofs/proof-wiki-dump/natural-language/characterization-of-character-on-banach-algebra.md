# 

Source: https://proofwiki.org/wiki/Characterization_of_Character_on_Banach_Algebra

Theorem
Let $\struct {A, \norm {\, \cdot \,} }$ be a Banach algebra over $\C$.
Let $\struct {A_+, \norm {\, \cdot \,}_{A_+} }$ be the unitization of $\struct {A, \norm {\, \cdot \,} }$.
Let $\phi : A_+ \to \C$ be a character.

Then either:

$(1) \quad \map \phi {x, \lambda} = \lambda$ for each $\tuple {x, \lambda} \in A_+$
$(2) \quad $ there exists a character $\widetilde \phi$ on $A$ such that $\map \phi {x, \lambda} = \map {\widetilde \phi} x + \lambda$ for each $\tuple {x, \lambda} \in A_+$.
Conversely, every map of the form given in $(2)$ is a character.


Proof
Note that since $\phi$ is linear, we have:

$\map \phi {x, \lambda} = \map \phi {x, 0} + \lambda \map \phi {0, 1}$
Then from Character on Unital Banach Algebra is Unital Algebra Homomorphism, we have:

$\map \phi {0, 1} = 1$
so that:

$\map \phi {x, \lambda} = \map \phi {x, 0} + \lambda$

We first show that:

$\map \phi {x, \lambda} = \lambda$
defines a character.
Let $\tuple {x, \lambda}, \tuple {y, \mu} \in A_+$ and $t \in \C$. 
Then we have:














\(\ds \map \phi {x, \lambda} + t \map \phi {y, \mu}\)

\(=\)







\(\ds \lambda + t \mu\)




















\(\ds \)

\(=\)







\(\ds \map \phi {x + t y, \lambda + t \mu}\)









hence $\phi$ is linear.
We also have:














\(\ds \map \phi {x, \lambda} \map \phi {y, \mu}\)

\(=\)







\(\ds \lambda \mu\)




















\(\ds \)

\(=\)







\(\ds \map \phi {x y, \lambda \mu}\)









hence $\phi$ is a character.
In this case $\map \phi {x, 0} = 0$ for each $x \in A$. 

Now suppose that $\map \phi {x, 0} \ne 0$ for each $x \in A$. 
We show that:

$\map {\widetilde \phi} x = \map \phi {x, 0}$
is a character on $A$.
For $\tuple {x, \lambda}, \tuple {y, \mu} \in A_+$ and $t \in \C$, we have:














\(\ds \map {\widetilde \phi} x + t \map {\widetilde \phi} y\)

\(=\)







\(\ds \map \phi {x, 0} + t \map \phi {y, 0}\)




















\(\ds \)

\(=\)







\(\ds \map \phi {x + t y, 0}\)




















\(\ds \)

\(=\)







\(\ds \map {\widetilde \phi} {x + t y}\)









and:














\(\ds \map {\widetilde \phi} x \map {\widetilde \phi} y\)

\(=\)







\(\ds \map \phi {x, 0} \map \phi {y, 0}\)




















\(\ds \)

\(=\)







\(\ds \map \phi {x y, 0}\)




















\(\ds \)

\(=\)







\(\ds \map {\widetilde \phi} {x y}\)









So $\widetilde \phi$ is a character on $A$ and $\phi$ has the form:

$\map \phi {x, \lambda} = \map {\widetilde \phi} x + \lambda$
where $\widetilde \phi$ is a character on $A$.
So every character on $A_+$ has the form in $(2)$. 

Conversely, let $\widetilde \phi$ be a character on $A$.
Define:

$\map \phi {x, \lambda} = \map {\widetilde \phi} x + \lambda$
for each $\tuple {x, \lambda} \in A_+$.
Let $\tuple {x, \lambda}, \tuple {y, \mu} \in A_+$ and $t \in \C$.
Then we have:














\(\ds \map \phi {x + t y, \lambda + t \mu}\)

\(=\)







\(\ds \map {\widetilde \phi} {x + t y} + \paren {\lambda + t \mu}\)




















\(\ds \)

\(=\)







\(\ds \paren {\map {\widetilde \phi} x + \lambda} + t \paren {\map {\widetilde \phi} y + \mu}\)





since $\widetilde \phi$ is linear














\(\ds \)

\(=\)







\(\ds \map \phi {x, \lambda} + t \map \phi {y, \mu}\)









and:














\(\ds \map \phi {x, \lambda} \map \phi {y, \mu}\)

\(=\)







\(\ds \paren {\map {\widetilde \phi} x + \lambda} \paren {\map {\widetilde \phi} y + \mu}\)




















\(\ds \)

\(=\)







\(\ds \map {\widetilde \phi} x \map {\widetilde \phi} y + \lambda \map {\widetilde \phi} y + \mu \map {\widetilde \phi} x + \lambda \mu\)




















\(\ds \)

\(=\)







\(\ds \map {\widetilde \phi} {x y + \lambda y + \mu x} + \lambda \mu\)





Definition of Character (Banach Algebra)














\(\ds \)

\(=\)







\(\ds \map \phi {x y + \lambda y + \mu x, \lambda \mu}\)




















\(\ds \)

\(=\)







\(\ds \map \phi {\tuple {x, \lambda} \tuple {y, \mu} }\)





Definition of Unitization of Algebra over Field



So $\phi$ is a character.
$\blacksquare$





