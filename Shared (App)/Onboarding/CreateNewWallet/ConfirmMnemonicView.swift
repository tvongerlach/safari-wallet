//
//  ConfirmMnemonicView.swift
//  Wallet
//
//  Created by Ronald Mannak on 10/13/21.
//

import SwiftUI

struct ConfirmMnemonicView: View {
    
    @Binding var state: OnboardingState
    @Binding var tabIndex: Int
    var mnemonic: String
    @State var shuffledMnemonic: [String] = []
    
    var body: some View {
        
        VStack {
            
            Text("Confirm mnemonic")
                .onAppear {
                    shuffledMnemonic = RecoveryPhrase(mnemonic: mnemonic).shufflePhrase()
                }
            
            HStack(spacing: 8) {
                Button("Cancel") {
                    state = .initial
                }
        
                Button("Continue") {
                    // progress to next tab
                    tabIndex += 1
                }.disabled(false)
            }
        }
    }
}

struct ConfirmMnemonicView_Previews: PreviewProvider {
    @State static var state: OnboardingState = .createWallet
    @State static var tabIndex: Int = 0
    static var previews: some View {
        ConfirmMnemonicView(state:$state, tabIndex: $tabIndex, mnemonic: "abandon amount liar amount expire adjust cage candy arch gather drum buyer")
    }
}
