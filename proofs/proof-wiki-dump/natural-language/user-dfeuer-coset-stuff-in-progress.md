# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Coset_stuff_in_progress



Theorem
Let $\left({G, \circ}\right)$ be a group and let $H$ be a subgroup of $G$.
Let $x, y \in G$.

Let:

$y \circ H$ denote the left coset of $H$ by $y$
$H \circ y$ denote the right coset of $H$ by $y$.

Then:




\(\text {(1)}: \quad\)









\(\ds x \in y \circ H\)

\(\iff\)







\(\ds x^{-1} \circ y \in H\)










\(\text {(2)}: \quad\)









\(\ds x \in H \circ y\)

\(\iff\)







\(\ds x \circ y^{-1} \in H\)













Theorem
Let $\left({G, \circ}\right)$ be a group and let $H$ be a subgroup of $G$.
Let $x, y \in G$.

Let:

$y \circ H$ denote the left coset of $H$ by $y$
$H \circ y$ denote the right coset of $H$ by $y$.

Then:




\(\text {(1)}: \quad\)









\(\ds x \in y \circ H\)

\(\iff\)







\(\ds x^{-1} \circ y \in H\)











Proof













\(\ds \)

\(\)







\(\ds x \in y H\)




















\(\ds \)

\(\iff\)







\(\ds \exists h' \in H: x = y h'\)





Definition of Left Coset














\(\ds \)

\(\iff\)







\(\ds \exists h = h'^{-1} \in H: x h = y\)





Group element properties














\(\ds \)

\(\iff\)







\(\ds \exists h \in H: h = x^{-1} y\)





Group element properties














\(\ds \)

\(\iff\)







\(\ds x^{-1} y \in H\)





Definition of Left Coset



$\blacksquare$




Theorem
Let $\left({G, \circ}\right)$ be a group and let $H$ be a subgroup of $G$.
Let $x, y \in G$.

Let:

$y \circ H$ denote the left coset of $H$ by $y$
$H \circ y$ denote the right coset of $H$ by $y$.

Then:




\(\text {(1)}: \quad\)









\(\ds x \in H \circ y\)

\(\iff\)







\(\ds x \circ y^{-1} \in H\)











Proof
Let $\left({G,*}\right)$ be the opposite group of $\left({G,\circ}\right)$.
Then:

$x \in H \circ y \iff x \in y * H$
$x \circ y^{-1} \in H \iff y^{-1} * x \in H$
Since $H$ is closed under inverses:

$x \circ y^{-1} \in H \iff x^{-1} * y \in H$
By Element in Left Coset iff Product with Inverse in Subgroup:

$x \in y * H \iff x^{-1} * y \in H$
Thus $(2)$ holds.
$\blacksquare$





