# 

Source: https://proofwiki.org/wiki/Norm_of_Eisenstein_Integer

Theorem
Let $\alpha$ be an Eisenstein integer.
That is:

$\alpha = a + b \omega$ for some $a, b \in \Z$
where $\omega := e^{2 \pi i /3}$ is a cube root of unity.
Then:

$\cmod \alpha^2 = a^2 - a b + b^2$
where $\cmod {\, \cdot \,}$ denotes the modulus of a complex number.


Proof
We find that:














\(\ds \cmod \alpha^2\)

\(=\)







\(\ds \alpha \overline \alpha\)





Modulus in Terms of Conjugate














\(\ds \)

\(=\)







\(\ds \paren {a + b \omega} \paren {\overline {a + b \omega} }\)





Modulus in Terms of Conjugate














\(\ds \)

\(=\)







\(\ds \paren {a + b \omega} \paren {\overline a + \overline b \overline \omega}\)





Sum of Complex Conjugates and Product of Complex Conjugates














\(\ds \)

\(=\)







\(\ds \paren {a + b \omega} \paren {a + b \overline \omega}\)





Complex Number equals Conjugate iff Wholly Real














\(\ds \)

\(=\)







\(\ds a^2 + \paren {\omega + \overline \omega} a b + \omega \overline \omega b^2\)









By the definition of the polar form of a complex number:

$\omega = \exp \paren {\dfrac {2 \pi i} 3} = \map \cos {\dfrac {2 \pi} 3} + i \, \map \sin {\dfrac {2 \pi} 3} = -\dfrac 1 2 + i \dfrac {\sqrt 3} 2$
Thus by Sum of Complex Number with Conjugate:

$\omega + \overline \omega = 2 \cdot \paren {-\dfrac 1 2} = -1$
Also:














\(\ds \omega \overline \omega\)

\(=\)







\(\ds \map \exp {\dfrac {2 \pi i} 3} \, \overline {\map \exp {\dfrac {2 \pi i} 3} }\)




















\(\ds \)

\(=\)







\(\ds \map \exp {\dfrac {2 \pi i} 3} \, \map \exp {-\dfrac {2 \pi i} 3}\)





Polar Form of Complex Conjugate














\(\ds \)

\(=\)







\(\ds \map \exp {\dfrac {2 \pi i} 3 - \dfrac {2 \pi i} 3}\)





Exponential of Sum














\(\ds \)

\(=\)







\(\ds \map \exp 0\)




















\(\ds \)

\(=\)







\(\ds 1\)





Exponential of Zero



Therefore:

$\cmod \alpha^2 = a^2 + \paren {\omega + \overline \omega} a b + \omega \overline \omega b^2 = a^2 - a b + b^2$
as required.
$\blacksquare$





