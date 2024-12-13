# 

Source: https://proofwiki.org/wiki/Reduction_Formula_for_Primitive_of_Power_of_a_x_%2B_b_by_Power_of_p_x_%2B_q/Increment_of_Power


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
$\ds \int \paren {a x + b}^m \paren {p x + q}^n \rd x = \frac 1 {\paren {n + 1} \paren {b p - a q} } \paren {\paren {a x + b}^{m + 1} \paren {p x + q}^{n + 1} - a \paren {m + n + 2} \int \paren {a x + b}^m \paren {p x + q}^{n + 1} \rd x}$


Proof
From Reduction Formula for Primitive of Power of $a x + b$ by Power of $p x + q$: Decrement of Power:

$\ds \int \paren {a x + b}^m \paren {p x + q}^n \rd x = \frac {\paren {a x + b}^{m + 1} \paren {p x + q}^n} {\paren {m + n + 1} a} - \frac {n \paren {b p - a q} } {\paren {m + n + 1} a} \int \paren {a x + b}^m \paren {p x + q}^{n - 1} \rd x$

Putting $n + 1$ for $n$, this yields:














\(\ds \int \paren {a x + b}^m \paren {p x + q}^{n + 1} \rd x\)

\(=\)







\(\ds \frac {\paren {a x + b}^{m + 1} \paren {p x + q}^{n + 1} } {\paren {m + n + 2} a} - \frac {\paren {n + 1} \paren {b p - a q} } {\paren {m + n + 2} a} \int \paren {a x + b}^m \paren {p x + q}^n \rd x\)














\(\ds \leadsto \ \ \)





\(\ds \int \paren {a x + b}^m \paren {p x + q}^n\)

\(=\)







\(\ds \frac {\paren {a x + b}^{m + 1} \paren {p x + q}^{n + 1} } {\paren {n + 1} \paren {b p - a q} } - \frac {\paren {m + n + 2} a} {\paren {n + 1} \paren {b p - a q} } \int \paren {a x + b}^m \paren {p x + q}^{n + 1} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\paren {n + 1} \paren {b p - a q} } \paren {\paren {a x + b}^{m + 1} \paren {p x + q}^{n + 1} - a \paren {m + n + 2} \int \paren {a x + b}^m \paren {p x + q}^{n + 1} \rd x}\)









$\blacksquare$


Also defined as
This can also be reported as:

$\ds \int \paren {a x + b}^m \paren {p x + q}^n \rd x = \frac 1 {\paren {m + 1} \paren {a q - b p} } \paren {\paren {a x + b}^{m + 1} \paren {p x + q}^{n + 1} - p \paren {m + n + 2} \int \paren {a x + b}^{m + 1} \paren {p x + q}^n \rd x}$
by interchanging the roles of $m$ and $n$.





