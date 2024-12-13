# 

Source: https://proofwiki.org/wiki/Pappus%27s_Hexagon_Theorem



Theorem
Let $A, B, C$ be a set of collinear points.
Let $a, b, c$ be another set of collinear points.
Let $X, Y, Z$ be the points of intersection of each of the straight lines $Ab$ and $aB$, $Ac$ and $aC$, and $Bc$ and $bC$.

Then $X, Y, Z$ are collinear points.



Proof

The notation has been changed to match the source.
Let $ACE$ be collinear and $BFD$ also be collinear.
Join $ABCDEF$ in order.
The points where opposite sides of the hexagon cut each other are $NLM$:

$AB$ and $DE$ cross at $L$
$BC$ and $EF$ cross at $N$
$CD$ and $FA$ cross at $M$
$NLM$ are to be proved collinear.
There are two cases.
Case 1:  $EF$ not $\parallel CD$.
Produce $EF$ to meet $CD$ at $U$.
Label points $V$ and $W$ in $\triangle UVW$.
Apply Menelaus's Theorem to five transversals of $\triangle UVW$.




\(\text {(1)}: \quad\)









\(\ds \dfrac{UE}{EV} \cdot \dfrac {VA}{AW} \cdot \dfrac {WC}{CU}\)

\(=\)







\(\ds -1\)





Menelaus's Theorem for $ECA$ in $\triangle ABC$




\(\text {(2)}: \quad\)









\(\ds \dfrac{WC}{CU} \cdot \dfrac {UN}{NV} \cdot \dfrac {VB}{BW}\)

\(=\)







\(\ds -1\)





Menelaus's Theorem for $CNB$ in $\triangle ABC$




\(\text {(3)}: \quad\)









\(\ds \dfrac{UE}{EV} \cdot \dfrac {VL}{LW} \cdot \dfrac {WD}{DU}\)

\(=\)







\(\ds -1\)





Menelaus's Theorem for $ELD$ in $\triangle ABC$




\(\text {(4)}: \quad\)









\(\ds \dfrac{UF}{FV} \cdot \dfrac {VA}{AW} \cdot \dfrac {WM}{MU}\)

\(=\)







\(\ds -1\)





Menelaus's Theorem for $AMF$ in $\triangle ABC$




\(\text {(5)}: \quad\)









\(\ds \dfrac{UF}{FV} \cdot \dfrac {VB}{BW} \cdot \dfrac {WD}{DU}\)

\(=\)







\(\ds -1\)





Menelaus's Theorem for $BFD$ in $\triangle ABC$



Multiply $(2) \cdot (3) \cdot (4)$:














\(\ds \dfrac{WC}{CU} \cdot \dfrac {UN}{NV} \cdot \dfrac {VB}{BW} \cdot \dfrac{UE}{EV} \cdot \dfrac {VL}{LW} \cdot \dfrac {WD}{DU} \cdot \dfrac{UF}{FV} \cdot \dfrac {VA}{AW} \cdot \dfrac {WM}{MU}\)

\(=\)







\(\ds -1\)










\(\text {(6)}: \quad\)









\(\ds \dfrac {UN}{NV} \cdot \dfrac {VL}{LW} \cdot \dfrac {WM}{MU} \cdot \paren {\dfrac{WC}{CU} \cdot \dfrac {VB}{BW} \cdot \dfrac{UE}{EV} \cdot \dfrac {WD}{DU} \cdot \dfrac{UF}{FV} \cdot \dfrac {VA}{AW} }\)

\(=\)







\(\ds -1\)





rearranging



Multiply $(1) \cdot (5)$:














\(\ds \dfrac{UE}{EV} \cdot \dfrac {VA}{AW} \cdot \dfrac {WC}{CU} \cdot \dfrac{UF}{FV} \cdot \dfrac {VB}{BW} \cdot \dfrac {WD}{DU}\)

\(=\)







\(\ds 1\)










\(\text {(7)}: \quad\)









\(\ds \dfrac {WC}{CU} \cdot \dfrac {VB}{BW} \cdot \dfrac{UE}{EV} \cdot \dfrac {WD}{DU} \cdot \dfrac{UF}{FV}  \cdot \dfrac {VA}{AW}\)

\(=\)







\(\ds 1\)





rearranging



Multiply $(7)$ by $-1$ and equate the left hand side of $(6)$ to the left hand side of $(7)$:














\(\ds \dfrac {UN}{NV} \cdot \dfrac {VL}{LW} \cdot \dfrac {WM}{MU} \cdot \paren {\dfrac{WC}{CU} \cdot \dfrac {VB}{BW} \cdot \dfrac{UE}{EV} \cdot \dfrac {WD}{DU} \cdot \dfrac{UF}{FV} \cdot \dfrac {VA}{AW} }\)

\(=\)







\(\ds - \dfrac {WC}{CU} \cdot \dfrac {VB}{BW} \cdot \dfrac{UE}{EV} \cdot \dfrac {WD}{DU} \cdot \dfrac{UF}{FV}  \cdot \dfrac {VA}{AW}\)




















\(\ds \dfrac {UN}{NV} \cdot \dfrac {VL}{LW} \cdot \dfrac {WM}{MU}\)

\(=\)







\(\ds - 1\)









By Menelaus's Theorem, $NLM$ are collinear.
$\Box$

Case 2:  $EF \parallel CD$ (and $BC \parallel AF$).


$EF \parallel CD$ gives similar triangles.
For the first two, $\angle B$ is shared.














\(\ds \angle BVN\)

\(=\)







\(\ds \angle BWC\)





Parallelism implies Equal Corresponding Angles














\(\ds \triangle BVN\)

\(\sim\)







\(\ds \triangle BWC\)





Triangles with Two Equal Angles are Similar




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \dfrac{VN}{BV}\)

\(=\)







\(\ds \dfrac{WC}{BW}\)
























\(\ds \angle BVF\)

\(=\)







\(\ds \angle BWD\)





Parallelism implies Equal Corresponding Angles














\(\ds \triangle BVF\)

\(\sim\)







\(\ds \triangle BWD\)





Triangles with Two Equal Angles are Similar




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \dfrac{BV}{VF}\)

\(=\)







\(\ds \dfrac{BW}{WD}\)










For the next two, $\angle A$ is shared.














\(\ds \angle AWM\)

\(=\)







\(\ds \angle AVF\)





Parallelism implies Equal Corresponding Angles














\(\ds \triangle AWM\)

\(\sim\)







\(\ds \triangle AVF\)





Triangles with Two Equal Angles are Similar




\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \dfrac{AW}{WM}\)

\(=\)







\(\ds \dfrac{AV}{VF}\)
























\(\ds \angle AWC\)

\(=\)







\(\ds \angle AVE\)





Parallelism implies Equal Corresponding Angles














\(\ds \triangle AWC\)

\(\sim\)







\(\ds \triangle AVE\)





Triangles with Two Equal Angles are Similar




\(\text {(4)}: \quad\)









\(\ds \dfrac{WC}{AW}\)

\(=\)







\(\ds \dfrac{VE}{AV}\)
























\(\ds \angle EVL\)

\(=\)







\(\ds \angle DWL\)





Parallelism implies Equal Alternate Angles














\(\ds \angle ELV\)

\(=\)







\(\ds \angle DLW\)





Vertical Angle Theorem














\(\ds \triangle EVL\)

\(\sim\)







\(\ds \triangle DWL\)





Triangles with Two Equal Angles are Similar




\(\text {(5)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \dfrac{EV}{VL}\)

\(=\)







\(\ds \dfrac{DW}{WL}\)










Multiply the left hand side of $(1)$ through $(5)$ together as the new left hand side.
Multiply the right hand side of $(1)$ through $(5)$ together as the new right hand side.




\(\text {(6)}: \quad\)









\(\ds \dfrac {VN}{BV} \cdot \dfrac {BV}{VF} \cdot \dfrac {AW}{WM} \cdot \dfrac {WC}{AW} \cdot \dfrac {EV}{VL}\)

\(=\)







\(\ds \dfrac {WC}{BW} \cdot \dfrac {BW}{WD} \cdot \dfrac {AV}{VF} \cdot \dfrac {VE}{AV} \cdot \dfrac {DW}{WL}\)




















\(\ds \dfrac {VN}{VF} \cdot \dfrac {WC}{WM} \cdot \dfrac {EV}{VL}\)

\(=\)







\(\ds \dfrac {WC}{BW} \cdot \dfrac {BW}{WD} \cdot \dfrac {AV}{VF} \cdot \dfrac {VE}{AV} \cdot \dfrac {DW}{WL}\)





cancel $BV$ and $AW$














\(\ds \dfrac {VN}{VF} \cdot \dfrac {WC}{WM} \cdot \dfrac {EV}{VL}\)

\(=\)







\(\ds \dfrac {WC}{WD} \cdot \dfrac {VE}{VF} \cdot \dfrac {DW}{WL}\)





cancel $BW$ and $AV$














\(\ds \dfrac {VN}{VF} \cdot \dfrac {WC}{WM} \cdot \dfrac {VE}{VL}\)

\(=\)







\(\ds \dfrac {WC}{WD} \cdot \dfrac {VE}{VF} \cdot \dfrac {WD}{WL}\)





reverse $EV$ and $DW$














\(\ds \dfrac {VN}{VF} \cdot \dfrac {WC}{WM} \cdot \dfrac {VE}{VL}\)

\(=\)







\(\ds \dfrac {WC}{WL} \cdot \dfrac {VE}{VF}\)





cancel $WD$














\(\ds \dfrac {VN}{VL} \cdot \dfrac {WC}{WM}\)

\(=\)







\(\ds \dfrac {WC}{WL}\)





cancel $\dfrac {VE} {VF}$














\(\ds \dfrac {VN}{WM}\)

\(=\)







\(\ds \dfrac {VL}{WL}\)





cancel $WC$ and rearrange














\(\ds \angle LVN\)

\(=\)







\(\ds \angle LWM\)





Parallelism implies Equal Alternate Angles














\(\ds \triangle LVN\)

\(\sim\)







\(\ds \triangle LWM\)





Triangles with One Equal Angle and Two Sides Proportional are Similar








\(\ds \leadsto \ \ \)





\(\ds \angle NLV\)

\(=\)







\(\ds \angle MLW\)










We have by hypothesis:

$VLW$ are collinear
Suppose $NLM$ are not collinear.
Then:

$\angle NLV \ne \angle MLW$
But this is a contradiction, since $\triangle NLV \sim \triangle MLW$ and $\angle NLV = \angle MLW$.
Hence, $NLM$ are collinear.
The result follows.
$\blacksquare$


Also known as
Pappus's Hexagon Theorem is also known just as Pappus's Theorem, but there is more than one such.
Hence on $\mathsf{Pr} \infty \mathsf{fWiki}$ we rigorously use the full version.


Also see
Pascal's Theorem
Pascal's Mystic Hexagram
Desargues' Theorem


Source of Name
This entry was named for Pappus of Alexandria.


Historical Note
Pappus's Hexagon Theorem was first proved by Pappus of Alexandria in about $300$ CE.
The theorem is stated as Propositions $138$, $139$, $141$, and $143$ of Book $\text{VII}$ of Pappus's Collection.

It is noted that it is a limiting case of Pascal's Mystic Hexagram.

In $1899$ its full significance was revealed by David Hilbert, during his work on clarifying the foundations of geometry.


Sources
1937: Eric Temple Bell: Men of Mathematics ... (previous) ... (next): Chapter $\text{V}$: "Greatness and Misery of Man"
1952: T. Ewan Faulkner: Projective Geometry (2nd ed.) ... (previous) ... (next): Chapter $1$: Introduction: The Propositions of Incidence: $1.1$: Historical Note
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $9$
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {A}.8$: Pappus (fourth century A.D.)
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $9$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Pappus' theorems (3)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Pappus' theorems (3)




