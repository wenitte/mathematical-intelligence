# 

Source: https://proofwiki.org/wiki/Finished_Branch_Lemma

Theorem
Let $\Gamma$ be a finished branch of a propositional tableau $\struct {T, \mathbf H, \Phi}$.
Let $v$ be a boolean interpretation such that:

$v \models_{\mathrm{BI}} \mathbf A$ for every basic WFF $\mathbf A$ that occurs along $\Gamma$.

Then:

$v \models_{\mathrm{BI} } \Phi \sqbrk \Gamma$
where $\Phi \sqbrk \Gamma$ is the image of $\Gamma$ under $\Phi$.


Corollary
Let $\Gamma$ be a finished branch of a propositional tableau $\struct {T, \mathbf H, \Phi}$.

Then $\Phi \sqbrk \Gamma$, the image of $\Gamma$ under $\Phi$, is satisfiable for boolean interpretations.


Proof
The proof appeals to the Principle of Structural Induction, applied to the statement:

If $\mathbf C$ occurs along $\Gamma$, then $v \models_{\mathrm{BI}} \mathbf C$.

When $\mathbf C$ is basic, the result holds per assumption.

Suppose $\mathbf C$ is not basic.
It is seen that one of the propositional tableau construction rules applies to $\mathbf C$.

If $\mathbf C = \neg\neg\mathbf A$, then it can only be used by the $\boxed {\neg \neg}$ rule.
Hence, $\mathbf A \in \Phi \sqbrk \Gamma$, and by induction hypothesis, $v \models_{\mathrm{BI} } \mathbf A$.
By Double Negation, $v \models_{\mathrm{BI} } \neg\neg\mathbf A$.

If $\mathbf C$ is $\mathbf A \land \mathbf B$, then it can only be used by the $\boxed \land$ rule.
Therefore, $\mathbf A, \mathbf B \in \Phi \sqbrk \Gamma$, and by induction hypothesis:

$v \models_{\mathrm{BI} } \mathbf A,\mathbf B$
By the truth function for $\land$, it follows that:

$v \models_{\mathrm{BI}} \mathbf A \land \mathbf B$

If $\mathbf C$ is $\neg \paren {\mathbf A \land \mathbf B}$, then it can only be used by the $\boxed {\neg \land}$ rule.
Therefore, $\neg \mathbf A \in \Phi \sqbrk \Gamma$ or $\neg \mathbf B \in \Phi \sqbrk \Gamma$.
By induction hypothesis, it follows that:

$v \models_{\mathrm{BI}} \neg\mathbf A$ or $v \models_{\mathrm{BI}} \neg\mathbf B$
By the truth function for $\land$, it follows that:

$v \models_{\mathrm{BI}} \neg \paren {\mathbf A \land \mathbf B}$

If $\mathbf C$ is $\mathbf A \lor \mathbf B$, then it can only be used by the $\boxed \lor$ rule.
Therefore, $\mathbf A \in \Phi \sqbrk \Gamma$ or $\mathbf B \in \Phi \sqbrk \Gamma$.
By induction hypothesis, it follows that:

$v \models_{\mathrm{BI}} \mathbf A$ or $v \models_{\mathrm{BI}} \mathbf B$
By the truth function for $\lor$, it follows that:

$v \models_{\mathrm{BI}} \mathbf A \lor \mathbf B$

If $\mathbf C$ is $\neg \paren {\mathbf A \lor \mathbf B}$, then it can only be used by the $\boxed {\neg \lor}$ rule.
Therefore, $\neg\mathbf A, \neg\mathbf B \in \Phi \sqbrk \Gamma$, and by induction hypothesis:

$v \models_{\mathrm{BI}} \neg\mathbf A,\neg\mathbf B$
By the truth function for $\lor$, it follows that:

$v \models_{\mathrm{BI}} \neg \paren {\mathbf A \lor \mathbf B}$

If $\mathbf C$ is $\mathbf A \implies \mathbf B$, then it can only be used by the $\boxed \implies$ rule.
Therefore, $\neg\mathbf A \in \Phi \sqbrk \Gamma$ or $\mathbf B \in \Phi \sqbrk \Gamma$.
By induction hypothesis, it follows that:

$v \models_{\mathrm{BI}} \neg\mathbf A$ or $v \models_{\mathrm{BI}} \mathbf B$
By the truth function for $\implies$, it follows that:

$v \models_{\mathrm{BI}} \mathbf A \implies \mathbf B$

If $\mathbf C$ is $\neg \paren {\mathbf A \implies \mathbf B}$, then it can only be used by the $\boxed{\neg\implies}$ rule.
Therefore, $\mathbf A, \neg\mathbf B \in \Phi \sqbrk \Gamma$, and by induction hypothesis:

$v \models_{\mathrm{BI}} \mathbf A,\neg\mathbf B$
By the truth function for $\implies$, it follows that:

$v \models_{\mathrm{BI}} \neg \paren {\mathbf A \implies \mathbf B}$

If $\mathbf C$ is $\mathbf A \iff \mathbf B$, then it can only be used by the $\boxed\iff$ rule.
Therefore, $\mathbf A\land \mathbf B \in \Phi \sqbrk \Gamma$ or $\neg\mathbf A \land \neg\mathbf B \in \Phi \sqbrk \Gamma$.
By induction hypothesis, it follows that:

$v \models_{\mathrm{BI}} \mathbf A,\mathbf B$ or $v \models_{\mathrm{BI}} \neg\mathbf A,\neg\mathbf B$
By the truth function for $\iff$, it follows that:

$v \models_{\mathrm{BI}} \mathbf A \iff \mathbf B$

If $\mathbf C$ is $\neg \paren {\mathbf A \iff \mathbf B}$, then it can only be used by the $\boxed {\neg \iff}$ rule.
Therefore, $\mathbf A\land \neg\mathbf B \in \Phi \sqbrk \Gamma$ or $\neg\mathbf A \land \mathbf B \in \Phi \sqbrk \Gamma$.
By induction hypothesis, it follows that:

$v \models_{\mathrm{BI}} \mathbf A, \neg \mathbf B$ or $v \models_{\mathrm{BI} } \neg \mathbf A, \mathbf B$
By the truth function for $\iff$, it follows that:

$v \models_{\mathrm{BI}} \neg \paren {\mathbf A \iff \mathbf B}$

Having dealt with all cases, it follows from the Principle of Structural Induction that:

$v \models_{\mathrm{BI} } \mathbf C$ for all WFFs $\mathbf C$ that occur along $\Gamma$
That is to say:

$v \models_{\mathrm{BI} } \Phi \sqbrk \Gamma$
$\blacksquare$





