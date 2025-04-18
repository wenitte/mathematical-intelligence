# 

Source: https://proofwiki.org/wiki/Distance_from_Vertex_of_Triangle_to_Orthocenter/Proof

Theorem
Let $\triangle ABC$ be a triangle with sides $a$, $b$ and $c$ opposite vertices $A$, $B$ and $C$ respectively.
Let $H$ be the orthocenter of $\triangle ABC$.
Then:

$AH = 2 R \size {\cos A}$
where $R$ denotes the circumradius of $\triangle ABC$.


Proof

This page has been identified as a candidate for refactoring of medium complexity.In particular: separate into subpages, one for acute and one for obtuse.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
This proof is for the case when $A \le 90 \degrees$.
The proof of the obtuse case is very similar.



We construct the circumcircle of $\triangle ABC$, whose circumcenter is $K$ and whose circumradius is $R$.
We construct the orthocenter $H$ of $\triangle ABC$ as the intersection of the altitudes $AD$ and $BE$.
First we note the following:














\(\ds \angle ABH\)

\(=\)







\(\ds \angle ABE\)




















\(\ds \)

\(=\)







\(\ds 180 \degrees - \angle AEB - \angle EAB\)





Sum of Angles of Triangle equals Two Right Angles














\(\ds \)

\(=\)







\(\ds 180 \degrees - 90 \degrees - \angle EAB\)





by construction




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds 90 \degrees - A\)





simplifying




Consider $\Box EHCD$.
$\angle CDH$ and $\angle CEH$ are both right angles.
Hence from Opposite Angles of Cyclic Quadrilateral sum to Two Right Angles, $\Box EHCD$ is a cyclic quadrilateral.
Thus:














\(\ds \angle AHB\)

\(=\)







\(\ds \angle EHD\)





Two Straight Lines make Equal Opposite Angles














\(\ds \angle EHD + \angle DCE\)

\(=\)







\(\ds 180 \degrees\)





Opposite Angles of Cyclic Quadrilateral sum to Two Right Angles




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \angle AHB\)

\(=\)







\(\ds 180 \degrees - C\)










Hence:














\(\ds \dfrac {AH} {\sin \angle ABH}\)

\(=\)







\(\ds \dfrac {AB} {\sin \angle AHB}\)





Law of Sines applied to $\triangle ABH$








\(\ds \leadsto \ \ \)





\(\ds \dfrac {AH} {\map \sin {90 \degrees - A} }\)

\(=\)







\(\ds \dfrac {AB} {\map \sin {180 \degrees - C} }\)





from $(1)$ and $(2)$








\(\ds \leadsto \ \ \)





\(\ds \dfrac {AH} {\cos A}\)

\(=\)







\(\ds \dfrac {AB} {\sin C}\)





Sine of Complement equals Cosine, Sine of Supplementary Angle














\(\ds \)

\(=\)







\(\ds 2 R\)





Law of Sines applied to $\triangle ABC$



The result follows.
$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (next): $\text V$. Trigonometry: The orthocentre




