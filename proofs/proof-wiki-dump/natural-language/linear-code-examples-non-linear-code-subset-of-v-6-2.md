# 

Source: https://proofwiki.org/wiki/Linear_Code/Examples/Non-Linear_Code/Subset_of_V(6,2)

Example of Non-Linear Code
Let $\map V {6, 2}$ denote the set of sequences of length $6$ of elements of $\Z_2$.
For all $x \in \Z_p$, let $\overline x$ denote $1 + x \pmod 2$ so that:

$\overline 0 = 1$
$\overline 1 = 0$
Let $C \subseteq \map V {6, 2}$ be the set of elements of $\map V {6, 2}$ of the form:

$x y z \overline x \overline y \overline z$
Then $C$ is not a linear code.


Proof
The elements of $C$ are:

$000111, 001110, 010101, 011100, 100011, 101010, 110001, 111000$
The minimum distance of $C$ is $2$.
We immediately note that:

$000111 + 001110 = 001001$
but that $001001 \notin C$.
So $C$ is not a linear code by definition.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $6$: Error-correcting codes: Exercise $1$




