# 

Source: https://proofwiki.org/wiki/Largest_Rectangle_with_Given_Perimeter_is_Square



Theorem
Let $\SS$ be the set of all rectangles with a given perimeter $L$.
The element of $\SS$ with the largest area is the square with length of side $\dfrac L 4$.


Proof
Consider an arbitrary element $R$ of $\SS$.
Let $B$ be half the perimeter of $R$.
Let $x$ be the length of one side of $R$.
Then the length of an adjacent side is $B - x$.
The area $\AA$ of $R$ is then given by:

$\AA = x \paren {B - x}$
Let $\AA$ be expressed in functional notation as:

$\map f x = x \paren {B - x}$
We have:














\(\ds \map f {x + E} - \map f x\)

\(=\)







\(\ds \paren {x + E} \paren {B - \paren {x + E} } - x \paren {B - x}\)




















\(\ds \)

\(=\)







\(\ds E B - 2 E x - E^2\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\map f {x + E} - \map f x} E\)

\(=\)







\(\ds B - 2 x - E\)














\(\ds \leadsto \ \ \)





\(\ds \intlimits {\frac {\map f {x + E} - \map f x} E} {E \mathop = 0} {}\)

\(=\)







\(\ds B - 2 x\)










Thus from Derivative at Maximum or Minimum, when $B - 2 x = 0$, the area of $R$ is at a maximum or a minimum.
That is:

$x = \dfrac B 2 = \dfrac L 4$
Geometrical analysis shows that for this length of side the area is not a minimum because that happens when $x = 0$ or $x = B$.
Hence the result.
$\blacksquare$


Historical Note
The result Largest Rectangle with Given Perimeter is Square was given by Pierre de Fermat as one of the first tests to demonstrate the use of his result Derivative at Maximum or Minimum.
It is a more specific (and accessible) version of Proposition $27$: Similar Parallelogram on Half a Straight Line.


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {A}.13$: Fermat ($\text {1601}$ – $\text {1665}$)




