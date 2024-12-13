# 

Source: https://proofwiki.org/wiki/P-adic_Valuation_is_Valuation



Theorem
The $p$-adic valuation $\nu_p: \Q \to \Z \cup \set {+\infty}$ is a valuation on $\Q$.


Proof
To prove that $\nu_p$ is a valuation it is necessary to demonstrate:




\((\text V 1)\)  

$:$  





  \(\ds \forall q, r \in \Q:\)



   \(\ds \map {\nu_p} {q r} \)

  \(\ds = \)  

\(\ds  \map {\nu_p} q + \map {\nu_p} r \)   

  


\((\text V 2)\)  

$:$  





  \(\ds \forall q \in \Q:\)



   \(\ds \map {\nu_p} q = +\infty \)

  \(\ds \iff \)  

\(\ds  q = 0 \)   

  


\((\text V 3)\)  

$:$  





  \(\ds \forall q, r \in \Q:\)



   \(\ds \map {\nu_p} {q + r} \)

  \(\ds \ge \)  

\(\ds  \min \set {\map {\nu_p} q, \map {\nu_p} r} \)   

  


Let $q := \dfrac a b, r := \dfrac c d \in \Q$.


Axiom $(\text V 1)$













\(\ds \map {\nu_p} {q r}\)

\(=\)







\(\ds \map {\nu_p} {\frac a b \cdot \frac c d}\)




















\(\ds \)

\(=\)







\(\ds \map {\nu_p} {\frac {a c} {b d} }\)





Definition of Rational Multiplication














\(\ds \)

\(=\)







\(\ds \map {\nu_p^\Z} {a c} - \map {\nu_p^\Z} {b d}\)





Definition of $p$-adic Valuation on Rational Numbers














\(\ds \)

\(=\)







\(\ds \paren {\map {\nu_p^\Z} a + \map {\nu_p^\Z} c} - \paren {\map {\nu_p^\Z} b + \map {\nu_p^\Z} d}\)





Restricted $p$-adic Valuation is Valuation: Axiom $\text V 1$














\(\ds \)

\(=\)







\(\ds \map {\nu_p^\Z} a - \map {\nu_p^\Z} b + \map {\nu_p^\Z} c - \map {\nu_p^\Z} d\)





Integer Addition is Commutative














\(\ds \)

\(=\)







\(\ds \map {\nu_p} {\frac a b} + \map {\nu_p} {\frac c d}\)





Definition of $p$-adic Valuation on Rational Numbers














\(\ds \)

\(=\)







\(\ds \map {\nu_p} q + \map {\nu_p} r\)









$\Box$


Axiom $(\text V 2)$













\(\ds \dfrac a b\)

\(=\)







\(\ds 0\)














\(\ds \leadstoandfrom \ \ \)





\(\ds a\)

\(=\)







\(\ds 0\)





Definition of Rational Number








\(\ds \leadstoandfrom \ \ \)





\(\ds \map {\nu_p^\Z} a\)

\(=\)







\(\ds +\infty\)





Definition of Restricted $p$-adic Valuation








\(\ds \leadstoandfrom \ \ \)





\(\ds \map {\nu_p^\Z} a - \map {\nu_p^\Z} b\)

\(=\)







\(\ds +\infty\)





as $b \ne 0$








\(\ds \leadstoandfrom \ \ \)





\(\ds \map {\nu_p} {\frac a b}\)

\(=\)







\(\ds +\infty\)





Definition of $p$-adic Valuation on Rational Numbers



$\Box$


Axiom $(\text V 3)$
From Restricted P-adic Valuation is Valuation follows that:














\(\ds \map {\nu_p} {\frac a b + \dfrac c d}\)

\(=\)







\(\ds \map {\nu_p} {\frac {a d + b c} {b d} }\)





Definition of Rational Addition














\(\ds \)

\(=\)







\(\ds \map {\nu_p^\Z} {a d + c b} - \map {\nu_p^\Z} {b d}\)





Definition of $p$-adic Valuation on Rational Numbers














\(\ds \)

\(\ge\)







\(\ds \min \set {\map {\nu_p^\Z} {a d}, \map {\nu_p^\Z} {c b} } - \map {\nu_p^\Z} {b d}\)





Restricted $p$-adic Valuation is Valuation: Axiom $\text V 3$














\(\ds \)

\(=\)







\(\ds \min \set {\map {\nu_p^\Z} a + \map {\nu_p^\Z} d, \map {\nu_p^\Z} c + \map {\nu_p^\Z} b} - \map {\nu_p^\Z} b - \map {\nu_p^\Z} d\)





Restricted $p$-adic Valuation is Valuation: Axiom $\text V 1$














\(\ds \)

\(=\)







\(\ds \min \set {\map {\nu_p^\Z} a - \map {\nu_p^\Z} b, \map {\nu_p^\Z} c - \map {\nu_p^\Z} d}\)




















\(\ds \)

\(=\)







\(\ds \min \set {\map {\nu_p} {\frac a b}, \map {\nu_p} {\frac c d} }\)





Definition of $p$-adic Valuation on Rational Numbers



Hence:

$\map {\nu_p} {\dfrac a b + \dfrac c d} \ge \min \set {\map {\nu_p} {\dfrac a b}, \map {\nu_p} {\dfrac c d} }$
Thus $\nu_p: \Q \to \Z \cup \set {+\infty}$ is a valuation on $\Q$ by definition.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 2.1$: Absolute Values on a Field: Lemma $2.1.3$




