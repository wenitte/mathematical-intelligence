# 

Source: https://proofwiki.org/wiki/Arbitrary_Power_of_Complex_Number



Theorem
Let $z = a + i b$ be a complex number.
Let $n \in \Z_{>0}$ be a (strictly) positive integer.
Then:














\(\ds z^n\)

\(=\)







\(\ds \paren {\sum_{\substack {0 \mathop \le j \mathop \le n \\ \text {$j$ even} } } \paren {-1}^{j / 2} \dbinom n j a^{n - j} b^j} + i \paren {\sum_{\substack {0 \mathop \le j \mathop \le n \\ \text {$j$ odd} } } \paren {-1}^{\paren {j - 1} / 2} \dbinom n j a^{n - j} b^j}\)




















\(\ds \)

\(=\)







\(\ds \paren {a^n - \dbinom n 2 a^{n - 2} b^2 + \dbinom n 4 a^{n - 4} b^4 - \cdots}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds i \paren {\dbinom n 1 a^{n - 1} b - \dbinom n 3 a^{n - 3} b^3 + \cdots}\)











Proof
Lemma
Let $z = a + i b$ be a complex number.
Let $n \in \Z_{>0}$ be a (strictly) positive integer.
Let $z^n = u_n + i v_n$.
Then $z^{n + 1} = u_{n + 1} + i v_{n + 1}$ where:














\(\ds u_{n + 1}\)

\(=\)







\(\ds a u_n - b v_n\)




















\(\ds v_{n + 1}\)

\(=\)







\(\ds a v_n + b u_n\)









$\Box$

The proof proceeds by induction.
For all $n \in \Z_{>0}$, let $\map P n$ be the proposition:

$\ds z^n = \paren {\sum_{\substack {0 \mathop \le j \mathop \le n \\ \text {$j$ even} } } \paren {-1}^{j / 2} \dbinom n j a^{n - j} b^j} + i \paren {\sum_{\substack {0 \mathop \le j \mathop \le n \\ \text {$j$ odd} } } \paren {-1}^{\paren {j - 1} / 2} \dbinom n j a^{n - j} b^j}$

$\map P 1$ is the case:














\(\ds z^1\)

\(=\)







\(\ds \paren {a + i b}^1\)




















\(\ds \)

\(=\)







\(\ds \dbinom 1 0 a^1 b^0 + i \dbinom 1 1 a^0 b^1\)




















\(\ds \)

\(=\)







\(\ds \dbinom 1 0 a^{1 - 0} b^0 + i \dbinom 1 1 a^{1 - 1} b^1\)




















\(\ds \)

\(=\)







\(\ds \paren {\sum_{\substack {0 \mathop \le j \mathop \le 1 \\ \text {$j$ even} } } \paren {-1}^{j / 2} \dbinom 1 j a^{1 - j} b^j} + i \paren {\sum_{\substack {0 \mathop \le j \mathop \le 1 \\ \text {$j$ odd} } } \paren {-1}^{\paren {j - 1} / 2} \dbinom 1 j a^{1 - j} b^j}\)









Thus $\map P 1$ is seen to hold.


Basis for the Induction
$\map P 2$ is the case:














\(\ds z^2\)

\(=\)







\(\ds \paren {a + i b}^2\)




















\(\ds \)

\(=\)







\(\ds a^2 - b^2 + i \paren {2 a b}\)





Square of Complex Number














\(\ds \)

\(=\)







\(\ds \dbinom 2 0 a^{2 - 0} b^0 + \dbinom 2 2 a^{2 - 2} b^2 + i \dbinom 1 1 a^{2 - 1} b^1\)




















\(\ds \)

\(=\)







\(\ds \paren {\sum_{\substack {0 \mathop \le j \mathop \le 2 \\ \text {$j$ even} } } \paren {-1}^{j / 2} \dbinom 2 j a^{2 - j} b^j} + i \paren {\sum_{\substack {0 \mathop \le j \mathop \le 2 \\ \text {$j$ odd} } } \paren {-1}^{\paren {j - 1} / 2} \dbinom 2 j a^{2 - j} b^j}\)










Thus $\map P 2$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$\ds z^k = \paren {\sum_{\substack {0 \mathop \le j \mathop \le k \\ \text {$j$ even} } } \paren {-1}^{j / 2} \dbinom k j a^{k - j} b^j} + i \paren {\sum_{\substack {0 \mathop \le j \mathop \le k \\ \text {$j$ odd} } } \paren {-1}^{\paren {j - 1} / 2} \dbinom k j a^{k - j} b^j}$

from which it is to be shown that:

$\ds z^{k + 1} = \paren {\sum_{\substack {0 \mathop \le j \mathop \le k + 1 \\ \text {$j$ even} } } \paren {-1}^{j / 2} \dbinom {k + 1} j a^{k + 1 - j} b^j} + i \paren {\sum_{\substack {0 \mathop \le j \mathop \le k + 1 \\ \text {$j$ odd} } } \paren {-1}^{\paren {j - 1} / 2} \dbinom {k + 1} j a^{k + 1 - j} b^j}$


Induction Step
This is the induction step:

From Lemma:














\(\ds z^{k + 1}\)

\(=\)







\(\ds u_{k + 1} + i v_{k + 1}\)




















\(\ds \)

\(=\)







\(\ds \paren {a u_k - b v_k} + i \paren {a v_k + b u_k}\)









where $z^k = u_k + i v_k$.

Taking the real part:














\(\ds u_{k + 1}\)

\(=\)







\(\ds a \paren {\sum_{\substack {0 \mathop \le j \mathop \le k \\ \text {$j$ even} } } \paren {-1}^{j / 2} \dbinom k j a^{k - j} b^j} - b \paren {\sum_{\substack {0 \mathop \le j \mathop \le k \\ \text {$j$ odd} } } \paren {-1}^{\paren {j - 1} / 2} \dbinom k j a^{k - j} b^j}\)





by Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {\sum_{\substack {0 \mathop \le j \mathop \le k \\ \text {$j$ even} } } \paren {-1}^{j / 2} \dbinom k j a^{k - j + 1} b^j} - \paren {\sum_{\substack {0 \mathop \le j \mathop \le k \\ \text {$j$ odd} } } \paren {-1}^{\paren {j - 1} / 2} \dbinom k j a^{k - j} b^{j + 1} }\)




















\(\ds \)

\(=\)







\(\ds \paren {\sum_{\substack {0 \mathop \le j \mathop \le k \\ \text {$j$ even} } } \paren {-1}^{j / 2} \dbinom k j a^{k - j + 1} b^j} + \paren {\sum_{\substack {0 \mathop \le j \mathop \le k \\ \text {$j$ odd} } } \paren {-1}^{\paren {\paren {j - 1} / 2} + 1} \dbinom k j a^{k - j} b^{j + 1} }\)




















\(\ds \)

\(=\)







\(\ds \paren {\sum_{\substack {0 \mathop \le j \mathop \le k \\ \text {$j$ even} } } \paren {-1}^{j / 2} \dbinom k j a^{k - j + 1} b^j} + \paren {\sum_{\substack {0 \mathop \le j \mathop \le k \\ \text {$j$ odd} } } \paren {-1}^{\paren {j + 1} / 2} \dbinom k j a^{k - j} b^{j + 1} }\)





simplification














\(\ds \)

\(=\)







\(\ds \paren {\sum_{\substack {0 \mathop \le j \mathop \le k \\ \text {$j$ even} } } \paren {-1}^{j / 2} \dbinom k j a^{k - j + 1} b^j} + \paren {\sum_{\substack {1 \mathop \le j \mathop \le k + 1 \\ \text {$j$ even} } } \paren {-1}^{\paren {\paren {j + 1} - 1} / 2} \dbinom k {j - 1} a^{k - \paren {j - 1} } b^j}\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds \paren {\sum_{\substack {0 \mathop \le j \mathop \le k \\ \text {$j$ even} } } \paren {-1}^{j / 2} \dbinom k j a^{k + 1 - j} b^j} + \paren {\sum_{\substack {1 \mathop \le j \mathop \le k + 1 \\ \text {$j$ even} } } \paren {-1}^{j / 2} \dbinom k {j - 1} a^{k + 1 - j} b^j}\)





simplifying














\(\ds \)

\(=\)







\(\ds a^{k + 1} + \paren {\sum_{\substack {1 \mathop \le j \mathop \le k \\ \text {$j$ even} } } \paren {-1}^{j / 2} \dbinom k j a^{k + 1 - j} b^j} + \paren {\sum_{\substack {1 \mathop \le j \mathop \le k \\ \text {$j$ even} } } \paren {-1}^{j / 2} \dbinom k {j - 1} a^{k + 1 - j} b^j} + \sqbrk {\text {$k + 1$ is even} } b^{k + 1}\)





where $\sqbrk \cdots$ is Iverson's convention














\(\ds \)

\(=\)







\(\ds a^{k + 1} + \paren {\sum_{\substack {1 \mathop \le j \mathop \le k \\ \text {$j$ even} } } \paren {-1}^{j / 2} \paren {\dbinom k j + \dbinom k {j - 1} } a^{k + 1 - j} b^j} + \sqbrk {\text {$k + 1$ is even} } b^{k + 1}\)





General Distributivity Theorem














\(\ds \)

\(=\)







\(\ds a^{k + 1} + \paren {\sum_{\substack {1 \mathop \le j \mathop \le k \\ \text {$j$ even} } } \paren {-1}^{j / 2} \dbinom {k + 1} j a^{k + 1 - j} b^j} + \sqbrk {\text {$k + 1$ is even} } b^{k + 1}\)





Pascal's Rule














\(\ds \)

\(=\)







\(\ds \paren {\sum_{\substack {0 \mathop \le j \mathop \le {k + 1} \\ \text {$j$ even} } } \paren {-1}^{j / 2} \dbinom {k + 1} j a^{k + 1 - j} b^j}\)





as $\dbinom {k + 1} 0 = \dbinom {k + 1} {k + 1} = 1$




Taking the imaginary part:














\(\ds v_{k + 1}\)

\(=\)







\(\ds a \paren {\sum_{\substack {0 \mathop \le j \mathop \le k \\ \text {$j$ odd} } } \paren {-1}^{\paren {j - 1} / 2} \dbinom k j a^{k - j} b^j} + b \paren {\sum_{\substack {0 \mathop \le j \mathop \le k \\ \text {$j$ even} } } \paren {-1}^{j / 2} \dbinom k j a^{k - j} b^j}\)





by Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {\sum_{\substack {0 \mathop \le j \mathop \le k \\ \text {$j$ odd} } } \paren {-1}^{\paren {j - 1} / 2} \dbinom k j a^{k - j + 1} b^j} + \paren {\sum_{\substack {0 \mathop \le j \mathop \le k \\ \text {$j$ even} } } \paren {-1}^{j / 2} \dbinom k j a^{k - j} b^{j + 1} }\)




















\(\ds \)

\(=\)







\(\ds \paren {\sum_{\substack {0 \mathop \le j \mathop \le k \\ \text {$j$ odd} } } \paren {-1}^{\paren {j - 1} / 2} \dbinom k j a^{k - j + 1} b^j} + \paren {\sum_{\substack {1 \mathop \le j \mathop \le k + 1 \\ \text {$j$ odd} } } \paren {-1}^{\paren {j - 1} / 2} \dbinom k {j - 1} a^{k - j - 1} b^j}\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds \paren {\sum_{\substack {0 \mathop \le j \mathop \le k \\ \text {$j$ odd} } } \paren {-1}^{\paren {j - 1} / 2} \dbinom k j a^{k + 1 - j} b^j} + \paren {\sum_{\substack {1 \mathop \le j \mathop \le k + 1 \\ \text {$j$ odd} } } \paren {-1}^{\paren {j - 1} / 2} \dbinom k {j - 1} a^{k + 1 - j} b^j}\)





simplifying














\(\ds \)

\(=\)







\(\ds \sqbrk {\text {$0$ is odd} } a^{k + 1} \paren {\sum_{\substack {1 \mathop \le j \mathop \le k \\ \text {$j$ odd} } } \paren {-1}^{\paren {j - 1} / 2} \dbinom k j a^{k + 1 - j} b^j} + \paren {\sum_{\substack {1 \mathop \le j \mathop \le k \\ \text {$j$ odd} } } \paren {-1}^{\paren {j - 1} / 2} \dbinom k {j - 1} a^{k + 1 - j} b^j} + \sqbrk {\text {$k + 1$ odd} } b^{k + 1}\)





where $\sqbrk \cdots$ is Iverson's convention














\(\ds \)

\(=\)







\(\ds \paren {\sum_{\substack {1 \mathop \le j \mathop \le k \\ \text {$j$ odd} } } \paren {-1}^{\paren {j - 1} / 2} \paren {\dbinom k j + \dbinom k {j - 1} } a^{k + 1 - j} b^j} + \sqbrk {\text {$k + 1$ odd} } b^{k + 1}\)





General Distributivity Theorem, and of course $\sqbrk {\text {$0$ is odd} } = 0$














\(\ds \)

\(=\)







\(\ds \paren {\sum_{\substack {1 \mathop \le j \mathop \le k \\ \text {$j$ odd} } } \paren {-1}^{\paren {j - 1} / 2} \dbinom {k + 1} j a^{k + 1 - j} b^j} + \sqbrk {\text {$k + 1$ odd} } b^{k + 1}\)





Pascal's Rule














\(\ds \)

\(=\)







\(\ds \paren {\sum_{\substack {0 \mathop \le j \mathop \le k + 1 \\ \text {$j$ odd} } } \paren {-1}^{\paren {j - 1} / 2} \dbinom {k + 1} j a^{k + 1 - j} b^j} + \sqbrk {\text {$k + 1$ odd} } b^{k + 1}\)





$0$ vacuously




Thus we have shown:
$\ds z^{k + 1} = \paren {\sum_{\substack {0 \mathop \le j \mathop \le k + 1 \\ \text {$j$ even} } } \paren {-1}^{j / 2} \dbinom {k + 1} j a^{k + 1 - j} b^j} + i \paren {\sum_{\substack {0 \mathop \le j \mathop \le k + 1 \\ \text {$j$ odd} } } \paren {-1}^{\paren {j - 1} / 2} \dbinom {k + 1} j a^{k + 1 - j} b^j}$
So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 0}: \ds z^n = \paren {\sum_{\substack {0 \mathop \le j \mathop \le n \\ \text {$j$ even} } } \paren {-1}^{j / 2} \dbinom n j a^{n - j} b^j} + i \paren {\sum_{\substack {0 \mathop \le j \mathop \le n \\ \text {$j$ odd} } } \paren {-1}^{\paren {j - 1} / 2} \dbinom n j a^{n - j} b^j}$
$\blacksquare$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.7$ Complex Numbers and Functions: Powers: $3.7.22$




