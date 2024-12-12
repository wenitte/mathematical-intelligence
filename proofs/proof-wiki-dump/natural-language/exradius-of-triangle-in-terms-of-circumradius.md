# 

Source: https://proofwiki.org/wiki/Exradius_of_Triangle_in_Terms_of_Circumradius



Theorem
Let $\triangle ABC$ be a triangle whose sides are $a$, $b$ and $c$ opposite vertices $A$, $B$ and $C$ respectively.
Let $\rho_a$ be the exradius of $\triangle ABC$ with respect to $a$.
Let $R$ be the circumradius of $\triangle ABC$.

Then:

$\rho_a = 4 R \sin \dfrac A 2 \cos \dfrac B 2 \cos \dfrac C 2$


Proof 1

By construction:














\(\ds AF\)

\(=\)







\(\ds AD\)




















\(\ds BF\)

\(=\)







\(\ds BE\)




















\(\ds CD\)

\(=\)







\(\ds CE\)














\(\ds \leadsto \ \ \)





\(\ds AB + BE\)

\(=\)







\(\ds AC + CE\)




















\(\ds \)

\(=\)







\(\ds s\)





where $s$ is the semiperimeter








\(\ds \leadsto \ \ \)





\(\ds BE\)

\(=\)







\(\ds s - c\)




















\(\ds EC\)

\(=\)







\(\ds s - b\)










We have:




\(\text {(1)}: \quad\)









\(\ds \rho_a\)

\(=\)







\(\ds A I_a \sin \frac A 2\)





Definition of Sine of Angle using $\triangle A I_a F$




Then:














\(\ds \dfrac {A I_a} {\sin \angle A B I_a}\)

\(=\)







\(\ds \dfrac c {\sin \angle A I_a B}\)





Law of Sines applied to $\triangle A B I_a$








\(\ds \leadsto \ \ \)





\(\ds \dfrac {A I_a} {\map \sin {90 \degrees + \frac B 2} }\)

\(=\)







\(\ds \dfrac c {\map \sin {90 \degrees - \frac B 2 - \frac A 2} }\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {A I_a} {\cos \frac B 2}\)

\(=\)







\(\ds \dfrac c {\sin \frac C 2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2 R \sin C} {\sin \frac C 2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2 R \cdot 2 \sin \frac C 2 \cos \frac C 2} {\sin \frac C 2}\)





Double Angle Formula for Sine














\(\ds \)

\(=\)







\(\ds 4 R \cos \frac C 2\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds A I_a\)

\(=\)







\(\ds 4 R \cos \frac B 2  \cos \frac C 2\)














\(\ds \leadsto \ \ \)





\(\ds \rho_a\)

\(=\)







\(\ds 4 R \sin \frac A 2 \cos \frac B 2  \cos \frac C 2\)





from $(1)$



$\blacksquare$


Proof 2

Let $r$ denote the inradius of $\triangle ABC$.
We have:














\(\ds r\)

\(=\)







\(\ds 4 R \sin \dfrac A 2 \sin \dfrac B 2 \sin \dfrac C 2\)





Inradius in Terms of Circumradius








\(\ds \leadsto \ \ \)





\(\ds \rho_a\)

\(=\)







\(\ds 4 R \sin \dfrac A 2 \map \sin {\dfrac {180 \degrees - B} 2} \map \sin {\dfrac {180 \degrees - C} 2}\)




















\(\ds \)

\(=\)







\(\ds 4 R \sin \dfrac A 2 \map \sin {90 \degrees - \dfrac B 2} \map \sin {90 \degrees - \dfrac C 2}\)




















\(\ds \)

\(=\)







\(\ds 4 R \sin \dfrac A 2 \cos \dfrac B 2 \cos \dfrac C 2\)





Sine of Complement equals Cosine




This article, or a section of it, needs explaining.In particular: Why the second line? From the book it says "It should be noted that this formula can be deduced from Inradius in Terms of Circumradius by writing $\paren {180 \degrees - B}$ for $B$ and $\paren {180 \degrees - C}$ for $C$" but plenty of work is needed to show why this is valid.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text V$. Trigonometry: Formulae $(56)$




