# 

Source: https://proofwiki.org/wiki/Extended_Rule_of_Implication



Theorem
Any sequent can be expressed as a theorem.
That is:

$P_1, P_2, P_3, \ldots, P_n \vdash Q$
means the same thing as:

$\vdash P_1 \implies \paren {P_2 \implies \paren {P_3 \implies \paren {\ldots \implies \paren {P_n \implies Q} \ldots} } }$
The latter expression is known as the corresponding conditional of the former.

Thus every sequent containing the symbol $\vdash$ can, if so desired, be expressed in the form of a theorem which has $\implies$.


Proof
From the Rule of Conjunction, we note the following.
Any sequent:

$P_1, P_2 \vdash Q$
can be expressed as:

$P_1 \land p_2 \vdash Q$

Also, from the Rule of Simplification, any sequent:

$P_1 \land P_2 \vdash Q$
can be expressed as:

$P_1, P_2 \vdash Q$

Consider the expression:

$P_1, P_2, P_3, \ldots, P_{n - 1}, P_n \vdash Q$
By repeated application of the above, we can arrive at:

$P_1 \land \paren {P_2 \land \paren {P_3 \land \paren {\ldots \land \paren {P_{n - 1} \land P_n} \ldots} } } \vdash Q$

For convenience, the Rule of Substitution can be used to substitute $R_1$ for:

$P_2 \land \paren {P_3 \land \paren {\ldots \land \paren {P_{n - 1} \land P_n} \ldots} }$
to get:

$P_1 \land R_1 \vdash Q$

From the Rule of Implication:

$\vdash \paren {P_1 \land R_1} \implies Q$
Using the Rule of Exportation, we then get:

$\vdash P_1 \implies \paren {R_1 \implies Q}$

Substituting back for $R_1$:

$\vdash P_1 \implies \paren {\paren {P_2 \land \paren {P_3 \land \paren {\ldots \land \paren {P_{n - 1} \land P_n} \ldots} } } \implies Q}$

Making a substitution of convenience again, substitute $R_2$ for:

$P_3 \land \paren {\ldots \land \paren {P_{n - 1} \land P_n} \ldots}$

Take the expression:

$\paren {P_2 \land R_2} \implies Q$
and express it as:

$P_2 \land R_2 \vdash Q$
and use the Rule of Exportation to get:

$P_2 \implies \paren {R_2 \implies Q}$

which, substituting back for $R_2$, gives:

$P_2 \implies \paren {\paren {P_3 \land \paren {\ldots \land \paren {P_{n - 1} \land P_n} \ldots} } \implies Q}$
Similarly:

$\paren {P_3 \land \paren {\ldots \land \paren {P_{n - 1} \land P_n} \ldots} } \implies Q$
converts to:

$P_3 \implies \paren {\paren {\ldots \land \paren {P_{n - 1} \land P_n} \ldots} \implies Q}$
The pattern becomes apparent.
Eventually:

$\paren {P_{n - 1} \land P_n} \implies Q$
which converts to:

$P_{n - 1} \implies \paren {P_n \implies Q}$

Substituting these back into our original expression:

$\vdash P_1 \implies \paren {P_2 \implies \paren {P_3 \implies \paren {\ldots \implies \paren {P_n \implies Q} \ldots} } }$
$\blacksquare$


Warning
The question needs to be asked as to whether it may be appropriate to use the Principle of Mathematical Induction to prove this theorem.
However, note that the Principle of Mathematical Induction is dependent upon the construction of the natural numbers, whose existence is demonstrated by means of a set of axioms which are themselves dependent upon a consistent and complete implementation of propositional logic, of which this theorem is a part.
So using induction to prove this result can be argued as being circular.


Sources
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.1$: Rules for natural deduction: Remark $1.12$




