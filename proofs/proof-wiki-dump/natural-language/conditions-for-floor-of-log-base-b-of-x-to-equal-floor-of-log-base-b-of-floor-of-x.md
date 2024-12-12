# 

Source: https://proofwiki.org/wiki/Conditions_for_Floor_of_Log_base_b_of_x_to_equal_Floor_of_Log_base_b_of_Floor_of_x



Theorem
Let $b \in \R$ be a real number.

$\forall x \in \R_{\ge 1}: \floor {\log_b x} = \floor {\log_b \floor x} \iff b \in \Z_{> 1}$
where $\floor x$ denotes the floor of $x$.


Proof 1
Necessary Condition
Let:

$\forall x \in \R_{\ge 1}: \floor {\log_b x} = \floor {\log_b \floor x}$
Let $x = b$.
Then:

$\floor {\log_b b} = \floor {\log_b \floor b}$













\(\ds \floor {\log_b b}\)

\(=\)







\(\ds \floor {\log_b \floor b}\)














\(\ds \leadsto \ \ \)





\(\ds \floor 1\)

\(=\)







\(\ds \floor {\log_b \floor b}\)





Logarithm of Base








\(\ds \leadsto \ \ \)





\(\ds 1\)

\(=\)







\(\ds \floor {\log_b \floor b}\)





Real Number is Integer iff equals Floor




Aiming for a contradiction, suppose $b \notin \Z$.














\(\ds \floor b\)

\(<\)







\(\ds b\)





Floor of Non-Integer








\(\ds \leadsto \ \ \)





\(\ds \log_b \floor b\)

\(<\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \floor {\log_b \floor b}\)

\(<\)







\(\ds \floor {\log_b b}\)














\(\ds \leadsto \ \ \)





\(\ds \floor {\log_b \floor b}\)

\(\ne\)







\(\ds \floor {\log_b b}\)





which contradicts $\floor {\log_b b} = \floor {\log_b \floor b}$



Thus by Proof by Contradiction:

$b \in \Z$
But for $\log_b$ to be defined, $b > 0$ and $b \ne 1$.
Hence:

$b \in \Z_{> 1}$
$\Box$


Sufficient Condition
Let $b \in \Z_{> 1}$.
Let $\floor {\log_b x} = n$.

Then:














\(\ds n\)

\(=\)

\(\, \ds \floor {\log_b x} \, \)





\(\ds \)














\(\ds \leadstoandfrom \ \ \)





\(\ds n\)

\(\le\)

\(\, \ds \log_b x \, \)

\(\, \ds < \, \)



\(\ds n + 1\)





Integer equals Floor iff Number between Integer and One More








\(\ds \leadstoandfrom \ \ \)





\(\ds b^n\)

\(\le\)

\(\, \ds x \, \)

\(\, \ds < \, \)



\(\ds b^{n + 1}\)





Power Function is Strictly Increasing over Positive Reals








\(\ds \leadstoandfrom \ \ \)





\(\ds b^n\)

\(\le\)

\(\, \ds \floor x \, \)

\(\, \ds < \, \)



\(\ds b^{n + 1}\)





Number not less than Integer iff Floor not less than Integer








\(\ds \leadstoandfrom \ \ \)





\(\ds n\)

\(\le\)

\(\, \ds \log_b \floor x \, \)

\(\, \ds < \, \)



\(\ds n + 1\)





Power Function is Strictly Increasing over Positive Reals








\(\ds \leadstoandfrom \ \ \)





\(\ds n\)

\(=\)

\(\, \ds \floor {\log_b \floor x} \, \)





\(\ds \)





Integer equals Floor iff Number between Integer and One More








\(\ds \leadstoandfrom \ \ \)





\(\ds \floor {\log_b x}\)

\(=\)

\(\, \ds \floor {\log_b \floor x} \, \)





\(\ds \)





Definition of $n$



$\blacksquare$


Proof 2
We have that:

Logarithm is Strictly Increasing
and:

Real Natural Logarithm Function is Continuous
Suppose that $\log_b x \in \Z$: let $\log_b x = n$, say.
Then:

$x = b^n$
It follows that:

$x \in \Z \iff b \in \Z$
Thus by McEliece's Theorem (Integer Functions):

$\forall x \in \R_{\ge 1}: \floor {\log_b x} = \floor {\log_b \floor x} \iff b \in \Z_{>1}$
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $34$




